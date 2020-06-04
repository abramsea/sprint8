class UserInfo {
    constructor(name, job) {
      this.name = name;
      this.job = job;
    }
    setUserInfo() {
      this.name = personNameInput.value;
      this.job = aboutInput.value;
    }
    updateUserInfo() {
      personName.textContent = this.name;
      about.textContent = this.job;
    }
  }
  
  