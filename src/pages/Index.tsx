import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingForm);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Waves" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">ИЮЛЬ</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <div className="flex items-center gap-3">
            <Button className="hidden md:block bg-accent hover:bg-accent/90" onClick={() => scrollToSection('#booking')}>
              Забронировать
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Waves" size={28} className="text-primary" />
                    <h2 className="text-xl font-bold text-primary">ИЮЛЬ</h2>
                  </div>
                  <button onClick={() => scrollToSection('#home')} className="text-left text-lg hover:text-primary transition-colors py-2">
                    Главная
                  </button>
                  <button onClick={() => scrollToSection('#services')} className="text-left text-lg hover:text-primary transition-colors py-2">
                    Услуги
                  </button>
                  <button onClick={() => scrollToSection('#schedule')} className="text-left text-lg hover:text-primary transition-colors py-2">
                    Расписание
                  </button>
                  <button onClick={() => scrollToSection('#prices')} className="text-left text-lg hover:text-primary transition-colors py-2">
                    Цены
                  </button>
                  <button onClick={() => scrollToSection('#gallery')} className="text-left text-lg hover:text-primary transition-colors py-2">
                    Галерея
                  </button>
                  <button onClick={() => scrollToSection('#contacts')} className="text-left text-lg hover:text-primary transition-colors py-2">
                    Контакты
                  </button>
                  <Button className="bg-accent hover:bg-accent/90 w-full mt-4" onClick={() => scrollToSection('#booking')}>
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Забронировать
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-wave"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Покоряй волны с профи!
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Обучение серфингу и водным видам спорта от опытных инструкторов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg bg-primary hover:bg-primary/90">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на урок
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональное обучение для всех уровней подготовки
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Waves',
                title: 'Серфинг',
                description: 'От основ до продвинутого уровня. Научим ловить волну и держать баланс.',
                color: 'text-primary'
              },
              {
                icon: 'Wind',
                title: 'Кайтсёрфинг',
                description: 'Управление кайтом, техника безопасности и первые прыжки над водой.',
                color: 'text-secondary'
              },
              {
                icon: 'Sailboat',
                title: 'Виндсёрфинг',
                description: 'Освоение паруса, маневрирование и техника скоростного глиссирования.',
                color: 'text-accent'
              },
              {
                icon: 'Ship',
                title: 'SUP-бординг',
                description: 'Stand Up Paddle - спокойное катание и фитнес на воде для любого возраста.',
                color: 'text-primary'
              },
              {
                icon: 'Droplets',
                title: 'Вейкбординг',
                description: 'Катание за катером с трюками и прыжками для любителей адреналина.',
                color: 'text-secondary'
              },
              {
                icon: 'Zap',
                title: 'Фоилбординг',
                description: 'Новейшая технология - полёт над водой на подводном крыле.',
                color: 'text-accent'
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 ${service.color}`}>
                    <Icon name={service.icon} size={32} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Расписание занятий</h2>
          <p className="text-center text-muted-foreground mb-12">
            Выберите удобное время для тренировки
          </p>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {[
                    { day: 'Понедельник - Пятница', times: ['08:00 - 10:00', '11:00 - 13:00', '15:00 - 17:00', '18:00 - 20:00'] },
                    { day: 'Суббота - Воскресенье', times: ['07:00 - 09:00', '10:00 - 12:00', '13:00 - 15:00', '16:00 - 18:00', '19:00 - 21:00'] }
                  ].map((schedule, idx) => (
                    <div key={idx} className="border-b last:border-0 pb-4 last:pb-0">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Icon name="Calendar" size={20} className="text-primary" />
                        {schedule.day}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {schedule.times.map((time, timeIdx) => (
                          <div key={timeIdx} className="bg-primary/5 rounded-lg px-3 py-2 text-sm text-center hover:bg-primary/10 transition-colors cursor-pointer">
                            <Icon name="Clock" size={14} className="inline mr-1" />
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12">
            Выгодные пакеты для всех уровней
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Пробное занятие',
                price: '2 500',
                duration: '1 час',
                features: ['Знакомство с инструктором', 'Вводный инструктаж', 'Базовая техника', 'Аренда оборудования'],
                popular: false
              },
              {
                name: 'Стандарт',
                price: '8 000',
                duration: '4 занятия',
                features: ['Персональный инструктор', 'Видеоразбор техники', 'Аренда оборудования', 'Страховка', 'Чат поддержки 24/7'],
                popular: true
              },
              {
                name: 'Профи',
                price: '18 000',
                duration: '10 занятий',
                features: ['Индивидуальная программа', 'Видеоанализ каждого урока', 'Premium оборудование', 'Доступ к закрытым спотам', 'Участие в соревнованиях'],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-primary border-2 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                  </div>
                  <CardDescription className="text-lg mt-2">{plan.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${plan.popular ? 'bg-accent hover:bg-accent/90' : ''}`}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 bg-gradient-to-br from-muted/50 to-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12">
            Моменты с наших тренировок
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              'https://cdn.poehali.dev/projects/a16b36dc-70de-4668-a445-382fb025bf0e/files/385caf1b-7f10-4965-9511-a7cbeff9d96d.jpg',
              'https://cdn.poehali.dev/projects/a16b36dc-70de-4668-a445-382fb025bf0e/files/5c5f3ade-5652-405a-b5d0-2d5c999b1adb.jpg',
              'https://cdn.poehali.dev/projects/a16b36dc-70de-4668-a445-382fb025bf0e/files/d911c911-f398-4838-ab4d-2c6337275db5.jpg',
              'https://cdn.poehali.dev/projects/a16b36dc-70de-4668-a445-382fb025bf0e/files/385caf1b-7f10-4965-9511-a7cbeff9d96d.jpg',
              'https://cdn.poehali.dev/projects/a16b36dc-70de-4668-a445-382fb025bf0e/files/5c5f3ade-5652-405a-b5d0-2d5c999b1adb.jpg',
              'https://cdn.poehali.dev/projects/a16b36dc-70de-4668-a445-382fb025bf0e/files/d911c911-f398-4838-ab4d-2c6337275db5.jpg'
            ].map((image, item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img src={image} alt={`Галерея ${item + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Бронирование</h2>
            <p className="text-center text-muted-foreground mb-12">
              Заполните форму, и мы свяжемся с вами для подтверждения
            </p>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Выберите услугу</Label>
                    <Select value={bookingForm.service} onValueChange={(value) => setBookingForm({ ...bookingForm, service: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите вид спорта" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="surfing">Серфинг</SelectItem>
                        <SelectItem value="kite">Кайтсёрфинг</SelectItem>
                        <SelectItem value="wind">Виндсёрфинг</SelectItem>
                        <SelectItem value="sup">SUP-бординг</SelectItem>
                        <SelectItem value="wake">Вейкбординг</SelectItem>
                        <SelectItem value="foil">Фоилбординг</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date">Желаемая дата</Label>
                    <Input
                      id="date"
                      type="date"
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о своем опыте и пожеланиях..."
                      value={bookingForm.message}
                      onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Приезжайте к нам или свяжитесь удобным способом
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Сочи, пляж "Ривьера"<br />ул. Приморская, 1</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67<br />Ежедневно: 8:00 - 21:00</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">info@july-beach.ru<br />Ответим в течение часа</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="MapPin" size={64} className="text-primary/40 mx-auto mb-4" />
                    <p className="text-muted-foreground">Интерактивная карта</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Waves" size={32} className="text-primary" />
                <h3 className="text-xl font-bold">ИЮЛЬ</h3>
              </div>
              <p className="text-background/80">Пляжный центр водных видов спорта в Сочи</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/80">
                <li>Серфинг</li>
                <li>Кайтсёрфинг</li>
                <li>Виндсёрфинг</li>
                <li>SUP-бординг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-background/80">
                <li>О нас</li>
                <li>Инструкторы</li>
                <li>Правила безопасности</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Youtube" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 transition-colors flex items-center justify-center cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 Пляжный центр "ИЮЛЬ". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;