const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const data = {
  gym: ['01-01', '01-02', '01-06', '01-07', '01-08'],
  pill: ['01-03'],
  college: ['01-02'],
};

nlwSetup.setData(data);
nlwSetup.load();
