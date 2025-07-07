import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Топ-5 криптовалют для инвестиций в 2024",
      excerpt:
        "Анализ самых перспективных проектов для долгосрочных инвестиций",
      date: "15 декабря 2024",
      readTime: "5 мин",
      category: "Инвестиции",
      image: "/img/287c286d-0b6e-4e10-bb5c-553a9d75459b.jpg",
    },
    {
      id: 2,
      title: "Как читать японские свечи: полное руководство",
      excerpt: "Изучаем основы технического анализа и паттерны японских свечей",
      date: "12 декабря 2024",
      readTime: "8 мин",
      category: "Обучение",
      image: "/img/287c286d-0b6e-4e10-bb5c-553a9d75459b.jpg",
    },
    {
      id: 3,
      title: "DeFi протоколы: риски и возможности",
      excerpt: "Подробный разбор децентрализованных финансов и их перспектив",
      date: "10 декабря 2024",
      readTime: "12 мин",
      category: "DeFi",
      image: "/img/287c286d-0b6e-4e10-bb5c-553a9d75459b.jpg",
    },
    {
      id: 4,
      title: "Психология трейдинга: как управлять эмоциями",
      excerpt: "Ментальные аспекты успешной торговли на криптовалютных рынках",
      date: "8 декабря 2024",
      readTime: "6 мин",
      category: "Психология",
      image: "/img/287c286d-0b6e-4e10-bb5c-553a9d75459b.jpg",
    },
    {
      id: 5,
      title: "Стратегии хеджирования в криптовалютах",
      excerpt: "Методы защиты портфеля от рыночных рисков",
      date: "5 декабря 2024",
      readTime: "10 мин",
      category: "Стратегии",
      image: "/img/287c286d-0b6e-4e10-bb5c-553a9d75459b.jpg",
    },
  ];

  const categories = [
    "Все",
    "Инвестиции",
    "Обучение",
    "DeFi",
    "Психология",
    "Стратегии",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4">
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
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary"
              >
                <Icon name="Home" className="mr-2" size={16} />
                Главная
              </Button>
            </Link>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Icon name="Users" className="mr-2" size={16} />
              Присоединиться
            </Button>
          </div>
        </nav>
      </header>

      {/* Blog Header */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Блог CryptoClub
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Эксклюзивные инсайты, аналитика и обучающие материалы от
          профессиональных трейдеров
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Все" ? "default" : "outline"}
              size="sm"
              className={
                category === "Все"
                  ? "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  : "border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/60"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:scale-105 cursor-pointer"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center">
                      <Icon name="Calendar" className="mr-1" size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Clock" className="mr-1" size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2 text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                  >
                    Читать далее
                    <Icon name="ArrowRight" className="ml-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Подпишитесь на нашу рассылку
              </h3>
              <p className="text-muted-foreground mb-6">
                Получайте самые свежие новости и эксклюзивные материалы прямо на
                почту
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-2 rounded-md bg-background/50 border border-primary/30 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  <Icon name="Send" className="mr-2" size={16} />
                  Подписаться
                </Button>
              </div>
            </CardContent>
          </Card>
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

export default Blog;
