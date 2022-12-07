class Form {
  constructor(el) {
    this._el = el;
    this.form = this._el.querySelector(".container--form");
    this.submit = this.form.querySelector(".submit_btn");
    this.name = this.form.querySelector("#name");
    this.number = this.form.querySelector("#number");
    this.mm = this.form.querySelector("#mm");
    this.yy = this.form.querySelector("#yy");
    this.cvc = this.form.querySelector("#cvc");
    this.success = this._el.querySelector(".container--success");
    this.continue = this.success.querySelector("#continue");
    this.init();
  }

  nameValidation(elem, errorDom) {
    if (elem.value.length === 0) {
      this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "visible";
      if (!elem.parentNode.classList.contains("error")) {
        elem.parentNode.classList.add("error");
      }
      return false;
    } else {
      this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "hidden";
      if (elem.parentNode.classList.contains("error")) {
        elem.parentNode.classList.remove("error");
      }
      return true;
    }
  }


  numberValidation(elem, errorDom) {
    if (elem.value.length === 0) {
      this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "visible";
      this.form.querySelector(`[data-error="${errorDom}"]`).innerHTML = this.form.querySelector(`[data-error="${errorDom}"]`).dataset.empty;
      if (!elem.parentNode.classList.contains("error")) {
        elem.parentNode.classList.add("error");
      }
      return false;
    } else {
      const value = elem.value.split(" ");
      if(value.join('').length === 16) {
        this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "hidden";
        if (elem.parentNode.classList.contains("error")) {
          elem.parentNode.classList.remove("error");
        }
        return true;
      } else {
        this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "visible";
        this.form.querySelector(`[data-error="${errorDom}"]`).innerHTML = this.form.querySelector(`[data-error="${errorDom}"]`).dataset.invalid;
        if (!elem.parentNode.classList.contains("error")) {
          elem.parentNode.classList.add("error");
        }
        return false;
      }
    }
  } 

  monthValidation(elem, errorDom) {
    if (elem.value.length === 0) {
      this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "visible";
      this.form.querySelector(`[data-error="${errorDom}"]`).innerHTML = this.form.querySelector(`[data-error="${errorDom}"]`).dataset.empty;
      if (!elem.parentNode.classList.contains("error")) {
        elem.parentNode.classList.add("error");
      }
      return false;
    } else if (elem.value.length === 1) {
      if (+elem.value !== 0) {
        this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "hidden";
        if (elem.parentNode.classList.contains("error")) {
          elem.parentNode.classList.remove("error");
        }
        return true;
      } else {
        this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "visible";
        this.form.querySelector(`[data-error="${errorDom}"]`).innerHTML = this.form.querySelector(`[data-error="${errorDom}"]`).dataset.invalid;
        if (!elem.parentNode.classList.contains("error")) {
          elem.parentNode.classList.add("error");
        }
        return false;
      }
    } else if (elem.value.length === 2) {
      const value = +elem.value;
      if (value > 12) {
        this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "visible";
        this.form.querySelector(`[data-error="${errorDom}"]`).innerHTML = this.form.querySelector(`[data-error="${errorDom}"]`).dataset.invalid;
        if (!elem.parentNode.classList.contains("error")) {
          elem.parentNode.classList.add("error");
        }
        return false;
      } else if (value > 0 && value <= 12) {
        this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "hidden";
        if (elem.parentNode.classList.contains("error")) {
          elem.parentNode.classList.remove("error");
        }
        return true;
      }
    }
  }

  yearValidation(elem, errorDom) {
    if (elem.value.length === 0) {
      this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "visible";
      this.form.querySelector(`[data-error="${errorDom}"]`).innerHTML = this.form.querySelector(`[data-error="${errorDom}"]`).dataset.empty;
      if (!elem.parentNode.classList.contains("error")) {
        elem.parentNode.classList.add("error");
      }
      return false;
    } else if (elem.value.length === 1) {
      this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "visible";
      this.form.querySelector(`[data-error="${errorDom}"]`).innerHTML = this.form.querySelector(`[data-error="${errorDom}"]`).dataset.invalid;
      if (!elem.parentNode.classList.contains("error")) {
        elem.parentNode.classList.add("error");
      }
      return false;
    } else if (elem.value.length === 2) {
      const value = +elem.value;
      const yr = new Date().getFullYear().toString().slice(-2);
      if (value < +yr) {
        this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "visible";
        this.form.querySelector(`[data-error="${errorDom}"]`).innerHTML = this.form.querySelector(`[data-error="${errorDom}"]`).dataset.invalid;
        if (!elem.parentNode.classList.contains("error")) {
          elem.parentNode.classList.add("error");
        }
        return false;
      } else {
        this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "hidden";
        if (elem.parentNode.classList.contains("error")) {
          elem.parentNode.classList.remove("error");
        }
        return true;
      }
    }
  }

  cvcValidation(elem, errorDom) {
    if (elem.value.length === 0) {
      this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "visible";
      this.form.querySelector(`[data-error="${errorDom}"]`).innerHTML = this.form.querySelector(`[data-error="${errorDom}"]`).dataset.empty;
      if (!elem.parentNode.classList.contains("error")) {
        elem.parentNode.classList.add("error");
      }
      return false;
    } else if (elem.value.length > 0 && elem.value.length < 3) {
      this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "visible";
      this.form.querySelector(`[data-error="${errorDom}"]`).innerHTML = this.form.querySelector(`[data-error="${errorDom}"]`).dataset.invalid;
      if (!elem.parentNode.classList.contains("error")) {
        elem.parentNode.classList.add("error");
      }
      return false;
    } else {
      this.form.querySelector(`[data-error="${errorDom}"]`).style.visibility = "hidden";
      if (elem.parentNode.classList.contains("error")) {
        elem.parentNode.classList.remove("error");
      }
      return true;
    }
  }

  init() {

    if (this.name) {
      this.name.addEventListener("focusout", (evt) => {
        const value = this.name.value;
        if (this.name.parentNode.classList.contains("active")) {
          this.name.parentNode.classList.remove("active");
        }
        if (value.length === 0) {
          this._el.querySelector("#cardName").innerHTML = "John Doe";
        } else {
          this._el.querySelector("#cardName").innerHTML = value;
        }
        this.nameValidation(this.name, "name");
      });
      this.name.addEventListener("keyup", (evt)=> {
        const value = this.name.value;
        if (value.length === 0) {
          this._el.querySelector("#cardName").innerHTML = "John Doe";
        } else {
          this._el.querySelector("#cardName").innerHTML = value;
        }
        if (this.nameValidation(this.name, "name")) {
          if (this.name.parentNode.classList.contains("error")) {
            this.name.parentNode.classList.remove("error");
          }
        }
      });
      this.name.addEventListener("focus", (evt) => {
        if (!this.name.parentNode.classList.contains("active")) {
          this.name.parentNode.classList.add("active");
        }
      });
    }

    if (this.number) {
      this.number.addEventListener("focusout", (evt) => {
        const value = this.number.value.match(/.{1,4}/g);
        if (this.number.parentNode.classList.contains("active")) {
          this.number.parentNode.classList.remove("active");
        }
        if (value) {
          if (value.join('').length < 16) {
            this._el.querySelector("#cardNo").innerHTML = value.join('').padEnd(16, '_').match(/.{1,4}/g).join(' ');  
          } else {
            this._el.querySelector("#cardNo").innerHTML = value.join(' ');
          }
          this.number.value = value.join(' ');
        } else {
          this._el.querySelector("#cardNo").innerHTML = ''.padEnd(16, '0').match(/.{1,4}/g).join(' ');
        }
        this.numberValidation(this.number, "number");
      });

      this.number.addEventListener("keyup", (evt) => {
        const value = this.number.value.match(/.{1,4}/g);
        if (value) {
          if (value.join('').length < 16) {
            this._el.querySelector("#cardNo").innerHTML = value.join('').padEnd(16, '_').match(/.{1,4}/g).join(' ');  
          } else {
            this._el.querySelector("#cardNo").innerHTML = value.join(' ');
          }
        } else {
          this._el.querySelector("#cardNo").innerHTML = ''.padEnd(16, '0').match(/.{1,4}/g).join(' ');
        }
        if (this.numberValidation(this.number, "number")) {
          if (this.number.parentNode.classList.contains("error")) {
            this.number.parentNode.classList.remove("error");
          }
        }
      });

      this.number.addEventListener("focus", (evt) => {
        const value = this.number.value.split(" ");
        if (value) {
          this.number.value = value.join('');
        }
        if (!this.number.parentNode.classList.contains("active")) {
          this.number.parentNode.classList.add("active");
        }
      });

    }

    if (this.mm) {
      this.mm.addEventListener("focusout", (evt) => {
        const value = this.mm.value;
        if (this.mm.parentNode.classList.contains("active")) {
          this.mm.parentNode.classList.remove("active");
        }
        if (value.length === 0) {
          this._el.querySelector("#month").innerHTML = "00";
        } else {
          if (+value !== 0) {
            this.mm.value = value.padStart(2, "0");
            this._el.querySelector("#month").innerHTML = value.padStart(2, '0');
          }
        }
        this.monthValidation(this.mm, "mm");
      });
      this.mm.addEventListener("keyup", (evt) => {
        const value = this.mm.value;
        if (value.length === 0) {
          this._el.querySelector("#month").innerHTML = "00";
        } else {
          if (+value !== 0) {
            this._el.querySelector("#month").innerHTML = value.padStart(2, '0');
          }
        }
        if (this.monthValidation(this.mm, "mm")) {
          if (this.mm.parentNode.classList.contains("error")) {
            this.mm.parentNode.classList.add("error");
          }
        }
      });
      this.mm.addEventListener("focus", (evt) => {
        if (!this.mm.parentNode.classList.contains("active")) {
          this.mm.parentNode.classList.add("active");
        }
      });
    }

    if (this.yy) {
      this.yy.addEventListener("focusout", (evt) => {
        const value = this.yy.value;
        if (this.yy.parentNode.classList.contains("active")) {
          this.yy.parentNode.classList.remove("active");
        }
        if (value.length === 0) {
          this._el.querySelector("#year").innerHTML = "00";
        } else {
          this._el.querySelector("#year").innerHTML = value;
        }
        if (this.yearValidation(this.yy, "mm")) {
          this.monthValidation(this.mm, "mm");
        }
      });
      this.yy.addEventListener("keyup", (evt) => {
        const value = this.yy.value;
        if (value.length === 0) {
          this._el.querySelector("#year").innerHTML = "00";
        } else {
          this._el.querySelector("#year").innerHTML = value;
        }
        if (this.yearValidation(this.yy, "mm")) {
          if (this.yy.parentNode.classList.contains("error")) {
            this.yy.parentNode.classList.remove("error");
          }
        }
      });
      this.yy.addEventListener("focus", (evt) => {
        if (!this.yy.parentNode.classList.contains("active")) {
          this.yy.parentNode.classList.add("active");
        }
      });
    }

    if (this.cvc) {
      this.cvc.addEventListener("focusout", (evt) => {
        const value = this.cvc.value;
        if (this.cvc.parentNode.classList.contains("active")) {
          this.cvc.parentNode.classList.remove("active");
        }
        if (value.length === 0) {
          this._el.querySelector("#cvcNo").innerHTML = "000";
        } else if (value.length > 0 && value.length < 3) {
          this._el.querySelector("#cvcNo").innerHTML = value.padEnd(3, "_");
        } else {
          this._el.querySelector("#cvcNo").innerHTML = value;
        }
        this.cvcValidation(this.cvc, "cvc");
      });
      this.cvc.addEventListener("keyup", (evt) => {
        const value = this.cvc.value;
        if (value.length === 0) {
          this._el.querySelector("#cvcNo").innerHTML = "000";
        } else if (value.length > 0 && value.length < 3) {
          this._el.querySelector("#cvcNo").innerHTML = value.padEnd(3, "_");
        } else {
          this._el.querySelector("#cvcNo").innerHTML = value;
        }
        if (this.cvcValidation(this.cvc, "cvc")) {
          if (this.cvc.parentNode.classList.contains("error")) {
            this.cvc.parentNode.classList.remove("error");
          }
        }
      });
      this.cvc.addEventListener("focus", (evt) => {
        if (!this.cvc.parentNode.classList.contains("active")) {
          this.cvc.parentNode.classList.add("active");
        }
      });
    }

    if (this.submit) {
      this.submit.addEventListener("click", (evt) => {
        evt.preventDefault();
        const nameCheck = this.nameValidation(this.name, "name");
        const numberCheck = this.numberValidation(this.number, "number");
        const mmCheck = this.monthValidation(this.mm, "mm");
        if (mmCheck) {
          const yyCheck = this.yearValidation(this.yy, "mm");
        }
        const cvcCheck = this.cvcValidation(this.cvc, "cvc");
        if (nameCheck && numberCheck && mmCheck && this.yearValidation(this.yy, "mm") && cvcCheck) {
          this.form.style.display = "none";
          this.success.style.display = "flex";
        } else {
          if (!nameCheck || !numberCheck || !mmCheck || !this.yearValidation(this.yy, "mm")) {
            this._el.querySelector(".container--img-card").classList.add("shake");
            this._el.querySelector(".container--img-card").addEventListener("animationend", (evt) => {
              this._el.querySelector(".container--img-card").classList.remove("shake");
            });
            if (!cvcCheck) {
              this._el.querySelector(".container--img-card.back").classList.add("shake");
              this._el.querySelector(".container--img-card.back").addEventListener("animationend", (evt) => {
                this._el.querySelector(".container--img-card.back").classList.remove("shake");
              });
            }
          } else {
            this._el.querySelector(".container--img-card.back").classList.add("shake");
            this._el.querySelector(".container--img-card.back").addEventListener("animationend", (evt) => {
              this._el.querySelector(".container--img-card.back").classList.remove("shake");
            });
          }
        }
      });
    }
    if (this.continue) {
      this.continue.addEventListener("click", (evt) => {
        evt.preventDefault();
        location.reload();
      });
    }
  }

}
class Attribution {
  constructor(el) {
    this._el = el;
    this.img = this._el.querySelector("#attribution-click");
    this.init();
  }

  init() {
    this.img.addEventListener("click", (evt) => {
      if (!this._el.querySelector(".attribution--content").classList.contains("active")) {
        this._el.querySelector(".attribution--content").classList.add("active");
      } else {
        this._el.querySelector(".attribution--content").classList.remove("active");
      }
    });

    window.addEventListener("resize", (evt) => {
      if (this._el.querySelector(".attribution--content").classList.contains("active")) {
        this._el.querySelector(".attribution--content").classList.remove("active");
      }
    });

    window.addEventListener("scroll", (evt) => {
      if (this._el.querySelector(".attribution--content").classList.contains("active")) {
        this._el.querySelector(".attribution--content").classList.remove("active");
      }
    });

    window.addEventListener("click", (evt) => {
      if (evt.target !== this.img) {{
        if (this._el.querySelector(".attribution--content").classList.contains("active")) {
          this._el.querySelector(".attribution--content").classList.remove("active");
        }
      }}
    });

  }

}
window.addEventListener("DOMContentLoaded", (evt) => {
  const form = document.querySelector(".container");
  if (form) {
    new Form(form);
  }
  const attribution = document.querySelector(".attribution");
  if (attribution) {
    new Attribution(attribution);
  }
});