import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

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

// Hand-drawn style doodle paths
const doodles = [
  // Neural network nodes
  { type: 'circles', positions: [[20, 15], [20, 25], [20, 35], [35, 20], [35, 30], [50, 25]] },
  // Brain doodle
  { type: 'emoji', content: '🧠', x: 85, y: 12 },
  // Robot
  { type: 'emoji', content: '🤖', x: 8, y: 45 },
  // Chart/graph
  { type: 'emoji', content: '📊', x: 92, y: 55 },
  // Lightning bolt
  { type: 'emoji', content: '⚡', x: 75, y: 80 },
  // Gear
  { type: 'emoji', content: '⚙️', x: 12, y: 78 },
  // Code
  { type: 'emoji', content: '💻', x: 88, y: 35 },
  // Lightbulb
  { type: 'emoji', content: '💡', x: 5, y: 20 },
  // Python
  { type: 'emoji', content: '🐍', x: 78, y: 92 },
  // Rocket
  { type: 'emoji', content: '🚀', x: 50, y: 8 },
  // Star
  { type: 'emoji', content: '✨', x: 30, y: 88 },
  // Math
  { type: 'emoji', content: '∑', x: 65, y: 75 },
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
          opacity: Math.random() * 0.12 + 0.08, // Darker: 0.08-0.20
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
      
      {/* Animated doodles */}
      {doodles.map((doodle, index) => {
        if (doodle.type === 'emoji') {
          return (
            <motion.div
              key={`doodle-${index}`}
              className="absolute text-2xl md:text-3xl select-none"
              style={{
                left: `${doodle.x}%`,
                top: `${doodle.y}%`,
                opacity: 0.15,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.15, 
                scale: 1,
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.1 },
                scale: { duration: 0.5, delay: index * 0.1 },
                y: { duration: 4 + index * 0.5, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 6 + index * 0.3, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              {doodle.content}
            </motion.div>
          );
        }
        
        if (doodle.type === 'circles') {
          return (
            <svg
              key={`doodle-${index}`}
              className="absolute w-full h-full opacity-10"
              style={{ pointerEvents: 'none' }}
            >
              {doodle.positions?.map((pos, i) => (
                <motion.circle
                  key={i}
                  cx={`${pos[0]}%`}
                  cy={`${pos[1]}%`}
                  r="8"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                />
              ))}
              {/* Connection lines for neural network */}
              <motion.line
                x1="20%" y1="15%" x2="35%" y2="20%"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.line
                x1="20%" y1="25%" x2="35%" y2="20%"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.line
                x1="20%" y1="25%" x2="35%" y2="30%"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <motion.line
                x1="20%" y1="35%" x2="35%" y2="30%"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.line
                x1="35%" y1="20%" x2="50%" y2="25%"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              />
              <motion.line
                x1="35%" y1="30%" x2="50%" y2="25%"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.0 }}
              />
            </svg>
          );
        }
        
        return null;
      })}

      {/* Hand-drawn style decorative elements */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        {/* Curvy arrow */}
        <motion.path
          d="M 60% 60% Q 65% 55%, 70% 58% T 80% 55%"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        {/* Squiggle */}
        <motion.path
          d="M 10% 60% Q 15% 55%, 20% 60% T 30% 55%"
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </svg>
      
      {/* Code blocks - darker */}
      {codeBlocks.map((block) => (
        <pre
          key={block.id}
          className="absolute font-mono text-[10px] sm:text-xs leading-relaxed whitespace-pre select-none"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            opacity: block.opacity,
            transform: `scale(${block.scale})`,
            color: 'hsl(var(--foreground))',
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