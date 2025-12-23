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
      --accent-soft: rgba(59,130,246,.25);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Inter", Arial, Helvetica, sans-serif;
    }

    body {
      background:
        radial-gradient(800px 400px at top, rgba(59,130,246,.12), transparent),
        #020617;
      color: var(--text);
      line-height: 1.7;
    }

    .container {
      max-width: 960px;
      margin: auto;
      padding: 80px 24px;
    }

    /* HERO */
    header {
      text-align: center;
      margin-bottom: 100px;
      animation: fadeUp 0.8s ease forwards;
    }

    header h1 {
      font-size: 3.4rem;
      font-weight: 900;
      letter-spacing: -1px;
      background: linear-gradient(90deg, #60a5fa, #2563eb);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .underline {
      width: 120px;
      height: 4px;
      background: linear-gradient(90deg, #60a5fa, #2563eb);
      margin: 16px auto 24px;
      border-radius: 999px;
    }

    header p {
      color: var(--muted);
      font-size: 1.15rem;
      margin-bottom: 28px;
    }

    .badges {
      display: flex;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .badge {
      padding: 8px 14px;
      border: 1px solid var(--border);
      border-radius: 999px;
      font-size: 0.9rem;
      color: #c7d2fe;
      background: rgba(255,255,255,0.02);
    }

    .cta {
      display: inline-block;
      margin-top: 40px;
      padding: 12px 26px;
      border-radius: 999px;
      background: var(--accent);
      color: white;
      text-decoration: none;
      font-weight: 600;
      transition: transform .2s ease, box-shadow .2s ease;
    }

    .cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(59,130,246,.35);
    }

    /* SECTIONS */
    section {
      margin-bottom: 70px;
      animation: fadeUp 0.8s ease forwards;
    }

    section h2 {
      font-size: 1.9rem;
      margin-bottom: 24px;
      color: #bfdbfe;
    }

    .card {
      padding: 28px;
      border: 1px solid var(--border);
      border-radius: 18px;
      background: linear-gradient(
        180deg,
        rgba(255,255,255,0.03),
        rgba(255,255,255,0)
      );
      transition: transform .3s ease, border-color .3s ease;
    }

    .card:hover {
      transform: translateY(-4px);
      border-color: var(--accent);
    }

    .card p {
      color: #c7d2fe;
      margin-bottom: 16px;
    }

    /* INTEREST GRID */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
    }

    .interest {
      padding: 18px;
      border-radius: 14px;
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.02);
      text-align: center;
      transition: all .25s ease;
    }

    .interest:hover {
      border-color: var(--accent);
      box-shadow: 0 0 0 1px var(--accent-soft);
    }

    footer {
      text-align: center;
      margin-top: 120px;
      color: var(--muted);
      font-size: 0.9rem;
      opacity: .8;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 640px) {
      header h1 { font-size: 2.6rem; }
    }
  </style>
</head>

<body>
  <div class="container">
    <header>
      <h1>Madhur Garg</h1>
      <div class="underline"></div>
      <p>Engineering Student • Developer • Tech Enthusiast</p>

       <div class="badges">
        <span class="badge">Web Development</span>
        <span class="badge">AI / ML</span>
        <span class="badge">Hackathons</span>
        <span class="badge">Problem Solving</span>
      </div>

      <a href="#about" class="cta">Explore My Work</a>
    </header>

    <section id="about">
      <h2>About Me</h2>
      <div class="card">
        <p>
          I am an engineering student with a strong interest in software
          development and problem solving. I enjoy building applications that
          solve real-world problems and deliver practical value.
        </p>
        <p>
          I actively participate in hackathons and technical competitions, where
          I focus on converting ideas into working products. I strongly believe
          in learning by building and improving through hands-on experience.
        </p>
      </div>
    </section>

    <section>
      <h2>Areas of Interest</h2>
      <div class="grid">
        <div class="interest">Web Development</div>
        <div class="interest">Full-Stack Systems</div>
        <div class="interest">AI & Machine Learning</div>
        <div class="interest">Computer Vision</div>
        <div class="interest">System Design</div>
      </div>
    </section>

    <footer>
      © 2025 Madhur Garg
    </footer>

  </div>
</body>
</html>
