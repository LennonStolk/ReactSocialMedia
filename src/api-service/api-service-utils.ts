export class ApiServiceUtils {
    
    // Wordt gebruikt om internet vertraging te simuleren
    // Handig om je laadschermen of animaties te testen
    static async simulateLag(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}