const useCareerForm = (name, email, number, role, resume) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("number", number);
  formData.append("role", role);
  formData.append("resume", resume);

  return formData;
};


export { useCareerForm };
