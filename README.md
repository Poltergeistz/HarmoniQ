<a name="readme-top"></a>

![Social card](https://github.com/user-attachments/assets/bbc45c02-8a84-44f4-8404-12ec181ccce3)


<div align="center">
  <h1 align="center">HarmoniQ - AI-Driven Time Management Tool with Menstrual Cycle Integration for Health Concious Entrepreneurs</h1>
  <p align="center">
    HarmoniQ is an innovative tool designed to help entrepreneurs, especially women, optimize their productivity by aligning their work schedule with their menstrual cycle. This AI-driven platform offers personalized task management based on hormonal phases and integrates with Google Calendar for seamless productivity optimization.
    <br />
    <a href="https://github.com/poltergeistz/harmoniq/issues/">Report Bug</a>
    ·
    <a href="https://github.com/poltergeistz/harmoniq/pulls">Open PR</a>
  </p>
</div>

## 📖 Description

HarmoniQ is a time management tool that integrates AI-driven task scheduling with menstrual cycle tracking, designed specifically for entrepreneurs. By leveraging hormonal phases, the platform provides personalized productivity insights and recommendations to optimize work routines for women entrepreneurs.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📦 Related Technologies

The following technologies and platforms are relevant to this project:

- [PydanticIA](https://github.com/pydantic/pydantic) for AI-based tool management
- [n8n](https://n8n.io/) for workflow automation (As prototype)
- [Google Calendar API](https://developers.google.com/calendar) for syncing tasks and appointments
- [Supabase](https://supabase.com/) for authentication and database management
- [Node.js](https://nodejs.org/) for backend API and task automation

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⏩ Quick Setup

To start using HarmoniQ, follow these steps:

### Run with Docker

HarmoniQ is containerized with Docker for easy setup and execution. To run the project using Docker:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/poltergeistz/harmoniq.git
   cd harmoniq
   ```

2. **Build the Docker container**:
   ```bash
   docker-compose build
   ```

3. **Start the application**:
   ```bash
   docker-compose up
   ```

4. **Open the app**:
   Visit [http://localhost:3000](http://localhost:3000) to interact with the app.

If you're using Docker on a different port, you may need to update the `docker-compose.yml` to map it to your preferred port.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔬 Testing

To test HarmoniQ:

1. Complete the onboarding process and input your menstrual cycle data.
2. Verify that the AI provides personalized task recommendations based on your hormonal phase.
3. Ensure that Google Calendar integrates seamlessly and that cycle data is handled securely using the RAG database.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 🛠 Useful Tools and Resources

- [PydanticIA Documentation](https://pydantic-docs.helpmanual.io/)
- [n8n Documentation](https://n8n.io/docs/)
- [Google Calendar API Documentation](https://developers.google.com/calendar)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 🌟 Features

- **Personalized Task Management**: AI-driven task scheduling based on hormonal phases to optimize productivity.
- **Cycle-Based Productivity Insights**: Recommendations for light tasks or wellness tips during specific phases like the luteal phase.
- **Privacy-Focused Data Handling**: Anonymized menstrual cycle data through the RAG database to protect user privacy.
- **Calendar Integration**: Seamless integration with Google Calendar to synchronize tasks and appointments.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 🛠 Development

To start development on HarmoniQ:

```bash
git clone https://github.com/poltergeistz/harmoniq.git
cd harmoniq
npm install
```

Run the app using:

```bash
npm start
```

For Docker, follow the instructions in the **Run with Docker** section above to build and run the containerized app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 📄 License

Distributed under the Fair Source License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 📧 Contact
David J. - [https://github.com/poltergeistz](https://github.com/poltergeistz)

Project Link: [https://github.com/poltergeistz/harmoniq](https://github.com/poltergeistz/harmoniq)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contribute

We welcome contributions from the community to help improve HarmoniQ! Whether you want to report bugs, suggest new features, or submit code, your input is appreciated.

### How to Contribute

1. **Fork the Repository**: Click on the "Fork" button at the top of this repository to create your own copy of HarmoniQ.
2. **Clone the Repository**: Clone your forked repository to your local machine using:
   ```bash
   git clone https://github.com/poltergeistz/harmoniq.git
   ```
3. **Create a Branch**: Make sure to create a new branch for each feature or bug fix you work on.
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make Changes**: Implement your changes and write tests if necessary.
5. **Commit Changes**: Commit your changes with a clear, descriptive message.
   ```bash
   git commit -m "Add new feature or fix"
   ```
6. **Push Changes**: Push your changes to your forked repository.
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**: Open a pull request to the main repository, and make sure to describe your changes clearly.

### Reporting Issues

If you encounter any issues, please open an [issue](https://github.com/poltergeistz/harmoniq/issues) with a detailed description of the problem, steps to reproduce it, and any relevant logs or error messages.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
```

### Key changes:
- **Run with Docker** section added: Instructions on how to use Docker to build and run the project.
- Instructions to visit the app at `localhost:3000` or adjust the port as needed.

Let me know if you'd like any further tweaks or additional details!
