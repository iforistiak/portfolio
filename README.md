<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Md Istiak Islam</title>
    <style>
        :root {
            --primary: #00d4ff;
            --secondary: #0055ff;
            --bg: #0a0b10;
            --text: #e0e0e0;
            --glass: rgba(255, 255, 255, 0.05);
        }

        body {
            background: var(--bg);
            color: var(--text);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* Animated Background Particles */
        .bg-animate {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: -1;
            background: radial-gradient(circle at 50% 50%, #1a1a2e, #0a0b10);
        }

        .container {
            max-width: 800px;
            padding: 40px;
            background: var(--glass);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8);
            animation: fadeIn 1.2s ease-out;
            text-align: center;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
        }

        .role {
            font-size: 1.2rem;
            color: var(--primary);
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 20px;
            display: block;
        }

        p {
            line-height: 1.6;
            font-size: 1.1rem;
            color: #b0b0b0;
            margin-bottom: 30px;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }

        .skill-card {
            background: rgba(255, 255, 255, 0.03);
            padding: 10px;
            border-radius: 8px;
            border: 1px solid rgba(0, 212, 255, 0.3);
            transition: 0.3s;
        }

        .skill-card:hover {
            background: var(--primary);
            color: #000;
            transform: scale(1.05);
            box-shadow: 0 0 15px var(--primary);
        }

        .btn {
            display: inline-block;
            margin-top: 30px;
            padding: 12px 30px;
            border: 2px solid var(--primary);
            color: var(--primary);
            text-decoration: none;
            border-radius: 30px;
            font-weight: bold;
            transition: 0.4s;
        }

        .btn:hover {
            background: var(--primary);
            color: #000;
        }
    </style>
</head>
<body>

    <div class="bg-animate"></div>

    <div class="container">
        <h1>Md. Istiak Islam</h1>
        <span class="role">IT Support Specialist</span>
        
        <p>
            A dynamic and versatile professional with a strong background in IT support, operations management, and administrative roles. 
            I bring hands-on experience in technical assistance and problem-solving, complemented by a solid foundation in data entry, 
            communication, and CRM.
        </p>

        <div class="skills-grid">
            <div class="skill-card">Technical Support</div>
            <div class="skill-card">Photoshop</div>
            <div class="skill-card">Operations</div>
            <div class="skill-card">CRM</div>
            <div class="skill-card">Data Entry</div>
            <div class="skill-card">Communication</div>
        </div>

        <a href="https://github.com/yourusername" class="btn">View My GitHub Projects</a>
    </div>

</body>
</html>
