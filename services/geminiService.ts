import { GoogleGenAI, Type } from "@google/genai";
import { ItineraryResult, TripPreferences } from "../types";

export const generateItinerary = async (prefs: TripPreferences): Promise<ItineraryResult> => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.warn("No API_KEY found. Returning simulated data.");
    await new Promise(resolve => setTimeout(resolve, 2500)); 
    return {
      plan: `【第一天：初入画卷】\n抵达${prefs.destination || '目的地'}，入住山脚下的生态民宿。午后漫步古村落，品尝当地特色"高山流水"茶席。\n\n【第二天：云深不知处】\n清晨前往核心景区，徒步穿越原始森林。推荐路线：青云栈道 -> 听涛亭 -> 望仙谷。中午在林间野餐，下午拍摄云海奇观。\n\n【第三天：归去来兮】\n探访当地自然博物馆，了解生物多样性。购买文创纪念品后返程。`,
      packingList: ["防滑徒步鞋", "速干衣裤", "防晒霜 (SPF50+)", "便携氧气瓶", "长焦相机", "雨衣", "保温杯"]
    };
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    你是一位精通中国山水地理和古典文化的旅行规划师。请根据以下需求设计一份具有文化韵味的国家公园行程。
    
    用户需求:
    - 目的地: ${prefs.destination || '请推荐一个适合当季的中国国家公园'}
    - 出发地: ${prefs.startCity || '未指定'}
    - 天数: ${prefs.days}天
    - 预算: ${prefs.budget}
    - 兴趣: ${prefs.interests.join(', ')}

    要求:
    1. 行程安排要有画面感，景点名称准确。
    2. 融入适当的诗词或文化典故。
    3. 返回 JSON 格式，包含 'plan' (字符串，支持换行) 和 'packingList' (字符串数组)。
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            plan: { type: Type.STRING },
            packingList: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    if (response.text) {
        return JSON.parse(response.text);
    }
    throw new Error("Empty response from AI");

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};