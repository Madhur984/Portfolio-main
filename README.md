<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Madhur Garg | Portfolio</title>

  <style>
    :root {
      --bg: #020617;
      --card: #020617;
      --border: #1e293b;
      --text: #e5e7eb;
      --muted: #94a3b8;
      --accent: #3b82f6;
      --accent-soft: rgba(59, 130, 246, 0.25);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Inter", Arial, Helvetica, sans-serif;
    }

    body {
      background: radial-gradient(circle at top, #020617, #000);
      color: var(--text);
      line-height: 1.7;
    }

    .container {
      max-width: 920px;
      margin: auto;
      padding: 60px 24px;
    }

    /* HEADER */
    header {
      text-align: center;
      margin-bottom: 80px;
    }

    header h1 {
      font-size: 3.2rem;
      font-weight: 800;
      letter-spacing: -1px;
      margin-bottom: 12px;
      background: linear-gradient(90deg, #60a5fa, #2563eb);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    header p {
      color: var(--muted);
      font-size: 1.15rem;
    }

    /* SECTIONS */
    section {
      margin-bottom: 60px;
      padding: 28px;
      border: 1px solid var(--border);
      border-radius: 16px;
      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0));
      transition: all 0.3s ease;
    }

    section:hover {
      border-color: var(--accent);
      box-shadow: 0 0 0 1px var(--accent-soft);
      transform: translateY(-2px);
    }

    section h2 {
      font-size: 1.7rem;
      margin-bottom: 12px;
      color: #bfdbfe;
      border-bottom: none;
    }

    section p {
      margin-top: 14px;
      color: #c7d2fe;
    }

    /* LIST */
    ul {
      margin-top: 16px;
      padding-left: 18px;
    }

    ul li {
      margin-bottom: 10px;
      color: #cbd5f5;
    }

    ul li::marker {
      color: var(--accent);
    }

    /* FOOTER */
    footer {
      text-align: center;
      margin-top: 80px;
      color: var(--muted);
      font-size: 0.9rem;
      opacity: 0.8;
    }

    /* RESPONSIVE */
    @media (max-width: 640px) {
      header h1 {
        font-size: 2.4rem;
      }
      section {
        padding: 22px;
      }
    }
  </style>
</head>

<body>
  <div class="container">

    <header>
      <h1>Madhur Garg</h1>
      <p>Engineering Student | Developer | Tech Enthusiast</p>
    </header>

    <section>
      <h2>About Me</h2>
      <p>
        I am an engineering student with a strong interest in software development
        and problem solving. I enjoy building applications that solve real-world
        problems and help people in practical ways.
      </p>
      <p>
        I actively participate in hackathons and technical competitions, where I
        focus on converting ideas into working products. I believe in learning by
        building and continuously improving my skills through hands-on projects.
      </p>
    </section>

    <section>
      <h2>Areas of Interest</h2>
      <ul>
        <li>Web Development</li>
        <li>Full-Stack Development</li>
        <li>Artificial Intelligence and Machine Learning</li>
        <li>Computer Vision and Automation</li>
        <li>Problem Solving and System Design</li>
      </ul>
    </section>

    <footer>
      © 2025 Madhur Garg
    </footer>

  </div>
</body>
</html>
