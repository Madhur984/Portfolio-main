import { useEffect, useState, useRef } from 'react';

const codeSnippets = [
  `def train_model(data):
    model = Sequential([
        Dense(128, activation='relu'),
        Dropout(0.3),
        Dense(10, activation='softmax')
    ])
    return model.fit(data)`,
  
  `import torch.nn as nn

class CNN(nn.Module):
    def __init__(self):
        self.conv1 = nn.Conv2d(3, 32, 3)
        self.pool = nn.MaxPool2d(2, 2)`,
  
  `# TensorFlow Image Classification
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)`,
  
  `from transformers import AutoModel

tokenizer = AutoTokenizer.from_pretrained(
    'bert-base-uncased'
)`,
  
  `# Neural Network Forward Pass
def forward(self, x):
    x = F.relu(self.fc1(x))
    x = self.dropout(x)
    return self.fc2(x)`,
  
  `# Data Preprocessing
scaler = StandardScaler()
X_train = scaler.fit_transform(X)
X_test = scaler.transform(X_test)`,
  
  `# Computer Vision Pipeline
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean, std)
])`,
  
  `# Model Evaluation
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2f}")`,
  
  `# Attention Mechanism
attention = torch.softmax(
    query @ key.T / sqrt(d_k), 
    dim=-1
) @ value`,
  
  `# Gradient Descent
for epoch in range(epochs):
    loss = criterion(output, target)
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()`,
];

interface CodeBlock {
  id: number;
  code: string;
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

export default function CodeBackground() {
  const [codeBlocks, setCodeBlocks] = useState<CodeBlock[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateBlocks = () => {
      const blocks: CodeBlock[] = [];
      const usedPositions: { x: number; y: number }[] = [];

      for (let i = 0; i < 8; i++) {
        let x, y;
        let attempts = 0;
        
        do {
          x = Math.random() * 80 + 5;
          y = Math.random() * 80 + 5;
          attempts++;
        } while (
          usedPositions.some(
            pos => Math.abs(pos.x - x) < 20 && Math.abs(pos.y - y) < 15
          ) && attempts < 20
        );

        usedPositions.push({ x, y });

        blocks.push({
          id: i,
          code: codeSnippets[i % codeSnippets.length],
          x,
          y,
          opacity: Math.random() * 0.08 + 0.04,
          scale: Math.random() * 0.3 + 0.7,
        });
      }
      setCodeBlocks(blocks);
    };

    generateBlocks();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ background: 'hsl(var(--background))' }}
    >
      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-3xl" />
      
      {/* Code blocks */}
      {codeBlocks.map((block) => (
        <pre
          key={block.id}
          className="absolute font-mono text-[10px] sm:text-xs leading-relaxed whitespace-pre select-none"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            opacity: block.opacity,
            transform: `scale(${block.scale})`,
            color: 'hsl(var(--primary))',
          }}
        >
          {block.code}
        </pre>
      ))}
      
      {/* Top and bottom fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
