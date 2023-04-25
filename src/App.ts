import Generate from "./commands/Generate";

export default class App {

    public static async generate(event) {
        try {
            const params = event.queryStringParameters || event.body;

            const command = new Generate();
            const r = await command.generate(params);
            return r;
        } catch(error) {
            console.error(error.stack ? error.stack : error);
            return { event, error };
        }
    }

}
