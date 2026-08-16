import doctor from './doctors/doctor1.jpg';
import doctor2 from './doctors/doctor2.jpg';
import doctor3 from './doctors/doctor3.png';
import doctor4 from './doctors/doctor4.jpg';
import doctor5 from './doctors/doctor5.png';
import doctor6 from './doctors/doctor6.jpg';
import doctor7 from './doctors/doctor7.png';
import doctor8 from './doctors/doctor8.png';
import doctor9 from './doctors/doctor9.jpg';
import doctor10 from './doctors/doctor10.png';
import logo from './logo.png'
import React, { useState } from 'react';
import './App.css';

import { Button, Card, Form, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [toastMessage, setToastMessage] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [problem, setProblem] = useState("");

  const [showA, setShowA] = useState(false);

  const showToast = (message) => {
    setShowA(false);

    setTimeout(() => {
      setToastMessage(message);
      setShowA(true);
    }, 10);
  };

  const handleSubmit = () => {
    setShowA(false);

    if (!email.trim()) {
      showToast("❌ Введіть E-Mail")
      return;
    }

    if (!phone.trim()) {
      showToast("❌ Введіть номер телефону");
      return;
    }

    if (!problem.trim()) {
      showToast("❌ Опишіть проблему");
      return;
    }

    showToast("✅ Форма була успішно нам відправлена!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="topbar">
          <div className="left">
            <img src={logo} alt="logo" />
          </div>

            <div className="menu">
              <Button variant = "danger">
                  Контакти
              </Button>

              <Button variant = "danger">
                  Кар'єра
              </Button>

              <Button variant = "danger">
                  Про нас
              </Button>

              <Button variant = "danger">
                  FAQ
              </Button>
            </div>
          </div>

          <div className="center-title">
            Наші лікарі
          </div>
          
        <div className = "block">
          <div className = "doctors-row">
            <Card className = 'doctor-card'>
            <Card.Img src = {doctor}/>
            <Card.Body>
              <Card.Title className = "doctor-title">
                Терапевт
              </Card.Title>
              <Card.Text className = "doctor-text">
                Олександр Іваненко
              </Card.Text>
              <Button variant = "danger" style = {{alignItems: 'flex-end'}}> Записатися </Button>
            </Card.Body>
          </Card>


            <Card className = 'doctor-card'>
            <Card.Img src = {doctor2}/>
            <Card.Body>
              <Card.Title className = "doctor-title">
                Логопед
              </Card.Title>
              <Card.Text className = "doctor-text">
                Ольга Назарченко
              </Card.Text>
              <Button variant = "danger"> Записатися </Button>
            </Card.Body>
          </Card>


            <Card className = 'doctor-card'>
            <Card.Img src = {doctor3}/>
            <Card.Body>
              <Card.Title className = "doctor-title">
                Ортопед
              </Card.Title>
              <Card.Text className = "doctor-text">
                Федір Федорченко
              </Card.Text>
              <Button variant = "danger"> Записатися </Button>
            </Card.Body>
          </Card>


            <Card className = 'doctor-card'>
            <Card.Img src = {doctor4}/>
            <Card.Body>
              <Card.Title className = "doctor-title">
                Невролог
              </Card.Title>
              <Card.Text className = "doctor-text">
                Павло Гриценко
              </Card.Text>
              <Button variant = "danger"> Записатися </Button>
            </Card.Body>
          </Card>


            <Card className = 'doctor-card'>
            <Card.Img src = {doctor5}/>
            <Card.Body>
              <Card.Title className = "doctor-title">
                Дієтолог
              </Card.Title>
              <Card.Text className = "doctor-text">
                Алла Дорошенко
              </Card.Text>
              <Button variant = "danger"> Записатися </Button>
            </Card.Body>
          </Card>


            <Card className = 'doctor-card'>
            <Card.Img src = {doctor6}/>
            <Card.Body>
              <Card.Title className = "doctor-title">
                Стоматолог
              </Card.Title>
              <Card.Text className = "doctor-text">
                Андрій Савченко
              </Card.Text>
              <Button variant = "danger"> Записатися </Button>
            </Card.Body>
          </Card>


            <Card className = 'doctor-card'>
            <Card.Img src = {doctor7}/>
            <Card.Body>
              <Card.Title className = "doctor-title">
                Рентгенолог
              </Card.Title>
              <Card.Text className = "doctor-text">
                Максим Пастарнак
              </Card.Text>
              <Button variant = "danger"> Записатися </Button>
            </Card.Body>
          </Card>


          <Card className = 'doctor-card'>
            <Card.Img src = {doctor8}/>
            <Card.Body>
              <Card.Title className = "doctor-title">
                Лікар УЗД
              </Card.Title>
              <Card.Text className = "doctor-text">
                Антон Корнієко
              </Card.Text>
              <Button variant = "danger"> Записатися </Button>
            </Card.Body>
          </Card>


          <Card className = 'doctor-card'>
            <Card.Img src = {doctor9}/>
            <Card.Body>
              <Card.Title className = "doctor-title">
                Анестезіолог
              </Card.Title>
              <Card.Text className = "doctor-text">
                Ірина Дяченко
              </Card.Text>
              <Button variant = "danger"> Записатися </Button>
            </Card.Body>
          </Card>


          <Card className = 'doctor-card'>
            <Card.Img src = {doctor10}/>
            <Card.Body>
              <Card.Title className = "doctor-title">
                Сімейний лікар
              </Card.Title>
              <Card.Text className = "doctor-text">
                Людмила Черненко
              </Card.Text>
              <Button variant = "danger"> Записатися </Button>
            </Card.Body>
          </Card>
          </div>
        </div>

        <div className="form-title">
          Не знайшли потрібного вам спеціаліста? <br /> Опишіть вашу проблему, і ми зв'яжемося з вами!
        </div>

        <div className="form-block">
            <Card className = "card-form">
              <Card.Body>

                <Form.Group className = "mb-2">
                  <Form.Label className = "mb-1">E-Mail:</Form.Label>
                  <Form.Control type = "email" placeholder = "example@example.com"
                  value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className = "mb-2">
                  <Form.Label className = "mb-1">Номер телефону:</Form.Label>
                  <Form.Control type = "tel" placeholder = "+380123456789"
                  value = {phone} onChange = {(e) => setPhone(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className = "mb-1">Опис проблеми:</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="В останній час наявні гострі болі..."
                  value = {problem} onChange = {(e) => setProblem(e.target.value)}/>
                  </Form.Group>

                <Button variant = "danger" onClick = {handleSubmit}>
                  Відправити
                </Button>

                <Toast className = "toast" show = {showA} onClose = {() => setShowA(false)} autohide delay = {3000}>
                  <Toast.Header>
                    <strong>Повідомлення</strong>
                  </Toast.Header>
                  <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>

              </Card.Body>
            </Card>
        </div>

      </header>
    </div>
  );
}

export default App;