const sendEmail = async (formData) => {
  try {
    const response = await fetch("https://formspree.io/f/your_form_id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return { success: true, message: "Email sent successfully" };
    } else {
      return { success: false, message: "Failed to send email" };
    }
  } catch (error) {
    return { success: false, message: "Network error" };
  }
};