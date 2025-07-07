import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="/img/287c286d-0b6e-4e10-bb5c-553a9d75459b.jpg"
              alt="Crypto Club Logo"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CryptoClub
              </h1>
              <p className="text-sm text-muted-foreground">
                Elite Trading Community
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/blog">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary"
              >
                <Icon name="BookOpen" className="mr-2" size={16} />
                Блог
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Icon name="Users" className="mr-2" size={16} />
              Присоединиться
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Элитный Криптовалютный Клуб
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к сообществу профессиональных трейдеров и
            инвесторов. Получите эксклюзивный доступ к торговым стратегиям и
            инсайдерской информации.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              <Icon name="TrendingUp" className="mr-2" size={20} />
              Начать торговлю
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    О нашем клубе
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    CryptoClub — это эксклюзивное сообщество профессиональных
                    трейдеров и инвесторов, специализирующихся на криптовалютных
                    рынках. Мы предоставляем нашим участникам передовые
                    аналитические инструменты, проверенные торговые стратегии и
                    доступ к закрытым каналам информации.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon
                        name="CheckCircle"
                        className="text-primary"
                        size={20}
                      />
                      <span className="text-foreground">
                        Эксклюзивные торговые сигналы
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon
                        name="CheckCircle"
                        className="text-primary"
                        size={20}
                      />
                      <span className="text-foreground">
                        Персональное обучение от экспертов
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon
                        name="CheckCircle"
                        className="text-primary"
                        size={20}
                      />
                      <span className="text-foreground">
                        Доступ к премиум-инструментам анализа
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border border-primary/30">
                    <div className="text-center">
                      <Icon
                        name="Play"
                        className="text-primary mx-auto mb-4"
                        size={64}
                      />
                      <p className="text-foreground font-medium">
                        Презентация клуба
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Нажмите, чтобы воспроизвести
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Преимущества членства
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Icon
                  name="BarChart3"
                  className="text-primary mx-auto mb-4"
                  size={48}
                />
                <h4 className="text-xl font-bold mb-2 text-foreground">
                  Профессиональная аналитика
                </h4>
                <p className="text-muted-foreground">
                  Получите доступ к глубокому техническому и фундаментальному
                  анализу криптовалютных рынков
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Users"
                  className="text-secondary mx-auto mb-4"
                  size={48}
                />
                <h4 className="text-xl font-bold mb-2 text-foreground">
                  Сообщество экспертов
                </h4>
                <p className="text-muted-foreground">
                  Общайтесь с успешными трейдерами, делитесь опытом и изучайте
                  новые стратегии
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Zap"
                  className="text-accent mx-auto mb-4"
                  size={48}
                />
                <h4 className="text-xl font-bold mb-2 text-foreground">
                  Быстрые сигналы
                </h4>
                <p className="text-muted-foreground">
                  Получайте торговые сигналы в реальном времени для максимизации
                  прибыли
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-border/50">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 CryptoClub. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
