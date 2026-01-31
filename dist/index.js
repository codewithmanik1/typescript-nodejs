"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
//express & typescript
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World! TypeScript + Express API',
        timestamp: new Date().toISOString(),
        status: 'success'
    });
});
app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.json({
        message: `Hello ${name}! Node.js Backend Ready`,
        name,
        version: '1.0.0'
    });
});
app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
    console.log(`📱 Test these:`);
    console.log(`   → http://localhost:3000/`);
    console.log(`   → http://localhost:3000/hello/Maanik`);
});
//# sourceMappingURL=index.js.map