import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

//express & typescript
app.get('/', (req: Request, res: Response): void => {
  res.json({ 
    message: 'Hello World! TypeScript + Express API', 
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

app.get('/hello/:name', (req: Request, res: Response): void => {
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
