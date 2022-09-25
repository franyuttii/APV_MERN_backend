import nodemailer from 'nodemailer'; 

const emailRegistro = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });

    const { email, nombre, token } = datos; 

    //Enviar el email
    const info = await transporter.sendMail({
      from: "APV- Administrador de pacientes de Veterinaria",
      to: email, 
      subject: "Verifica tu cuenta en APV",
      text: "Verifica tu cuenta en APV",
      html: `<p>Hola: ${nombre}, verifica tu cuenta en APV.</p>
             <p>Tu cuenta ya esta lista, solo debes verificarla en el siguiente enlace:
             <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Verificar Cuenta</a></p>
             <p>Si tu no creaste esta cuenta puedes ignorar el mensaje.</p>
      `
    });

    console.log('Mensaje enviado: %s', info.messageId);
}

export default emailRegistro; 