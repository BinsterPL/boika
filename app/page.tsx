"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  MessageCircle,
  Users,
  Trophy,
  Zap,
  Crown,
  Code,
  Shield,
  Gamepad2,
  Bot,
  Star,
  TrendingUp,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary gangster-glow animate-pulse">bojkaclat</div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                O mnie
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Umiejętności
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Projekty
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 animate-fade-in">
                <Crown className="w-8 h-8 text-primary animate-bounce" />
                <Badge variant="secondary" className="text-primary border-primary/20 animate-pulse">
                  Discord Boss
                </Badge>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-balance">
                <span className="text-primary gangster-glow bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-pulse">
                  bojkaclat
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 font-medium">
                Król Discord Development & Architekt Społeczności
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                Buduję najlepsze boty Discord w Polsce. Specjalizuję się w zaawansowanych systemach automatyzacji,
                premium funkcjach dla VIP-ów i tworzeniu społeczności, które faktycznie działają. Nie robię tandetnych
                botów - tylko high-end rozwiązania dla wymagających.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Sprawdź Moje Boty
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:bg-primary/10 bg-transparent hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                    <Crown className="w-16 h-16 text-primary animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">Elite Status</h3>
                  <p className="text-muted-foreground mb-4">Premium Discord Developer</p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl font-bold text-primary animate-pulse">127</div>
                      <div className="text-sm text-muted-foreground">Botów Stworzonych</div>
                    </div>
                    <div className="hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl font-bold text-primary animate-pulse">50K+</div>
                      <div className="text-sm text-muted-foreground">Aktywnych Użytkowników</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Tabs */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">Kim jestem?</h2>
            <div className="w-24 h-1 bg-primary mx-auto animate-pulse"></div>
          </div>

          <Tabs defaultValue="story" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="story" className="transition-all duration-300 hover:scale-105">
                Moja Historia
              </TabsTrigger>
              <TabsTrigger value="philosophy" className="transition-all duration-300 hover:scale-105">
                Filozofia
              </TabsTrigger>
              <TabsTrigger value="achievements" className="transition-all duration-300 hover:scale-105">
                Osiągnięcia
              </TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="space-y-6">
              <Card className="p-8 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-primary">Jak to się zaczęło</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Zacząłem od małego serwera gamingowego w 2019. Miałem dość tandetnych botów, które się crashowały co
                  chwilę. Postanowiłem napisać własnego - i tak się zaczęła moja przygoda z Discord development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dziś moje boty działają na serwerach z dziesiątkami tysięcy użytkowników. Każdy bot to dzieło sztuki -
                  nie tylko funkcjonalny, ale też elegancki i niezawodny. Robię to, co inni uważają za niemożliwe.
                </p>
              </Card>
            </TabsContent>

            <TabsContent value="philosophy" className="space-y-6">
              <Card className="p-8 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-primary">Moja filozofia pracy</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Jakość ponad ilość</h4>
                      <p className="text-muted-foreground">
                        Wolę stworzyć jednego perfekcyjnego bota niż dziesięć przeciętnych.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Bezpieczeństwo to podstawa</h4>
                      <p className="text-muted-foreground">
                        Każdy mój bot ma wielopoziomowe zabezpieczenia i monitoring.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Ciągły rozwój</h4>
                      <p className="text-muted-foreground">
                        Śledzę najnowsze trendy i technologie, żeby być zawsze o krok do przodu.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105">
                  <Trophy className="w-12 h-12 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Największy bot muzyczny w Polsce</h4>
                  <p className="text-muted-foreground">MusicMaster - używany na 2000+ serwerach, 24/7 uptime</p>
                </Card>
                <Card className="p-6 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105">
                  <Crown className="w-12 h-12 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">VIP Management System</h4>
                  <p className="text-muted-foreground">Pierwszy w Polsce system zarządzania premium członkami</p>
                </Card>
                <Card className="p-6 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105">
                  <Bot className="w-12 h-12 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">AI Moderator</h4>
                  <p className="text-muted-foreground">Pierwszy polski bot z prawdziwą sztuczną inteligencją</p>
                </Card>
                <Card className="p-6 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105">
                  <Gamepad2 className="w-12 h-12 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Tournament Master</h4>
                  <p className="text-muted-foreground">Obsłużył 500+ turniejów esportowych</p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">Moje umiejętności</h2>
            <div className="w-24 h-1 bg-primary mx-auto animate-pulse"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105 group">
              <Code className="w-12 h-12 text-primary mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-bold mb-3">Backend Development</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Node.js, Python, TypeScript - buduję wydajne API i systemy backendowe, które wytrzymują największe
                obciążenia.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">MongoDB</Badge>
              </div>
            </Card>

            <Card className="p-8 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105 group">
              <Bot className="w-12 h-12 text-primary mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-bold mb-3">Discord Expertise</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Discord.js, Discord.py, slash commands, interactions - znam Discord API jak własną kieszeń. Tworzę boty,
                które są szybkie i niezawodne.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Discord.js</Badge>
                <Badge variant="secondary">Discord.py</Badge>
                <Badge variant="secondary">Slash Commands</Badge>
                <Badge variant="secondary">Webhooks</Badge>
              </div>
            </Card>

            <Card className="p-8 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105 group">
              <Shield className="w-12 h-12 text-primary mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-bold mb-3">Security & DevOps</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Docker, AWS, monitoring, backup systems - dbam o to, żeby wszystko działało 24/7 bez problemów. Zero
                downtime to mój standard.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Monitoring</Badge>
                <Badge variant="secondary">Security</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">Moje najlepsze projekty</h2>
            <div className="w-24 h-1 bg-primary mx-auto animate-pulse"></div>
          </div>

          <Tabs defaultValue="bots" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="bots">Boty Discord</TabsTrigger>
              <TabsTrigger value="systems">Systemy</TabsTrigger>
              <TabsTrigger value="tools">Narzędzia</TabsTrigger>
            </TabsList>

            <TabsContent value="bots" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 gangster-border bg-card/50 backdrop-blur-sm group hover:bg-card/70 transition-all duration-500 hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Bot className="w-6 h-6 text-primary group-hover:animate-spin" />
                </div>
                <h3 className="text-xl font-bold mb-2">MusicMaster Pro</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Najlepszy bot muzyczny w Polsce. Obsługuje Spotify, YouTube, SoundCloud. 24/7 uptime, zero lagów,
                  premium sound quality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    FFmpeg
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Spotify API
                  </Badge>
                </div>
                <div className="text-sm text-primary font-semibold">2000+ serwerów • 50K+ użytkowników</div>
              </Card>

              <Card className="p-6 gangster-border bg-card/50 backdrop-blur-sm group hover:bg-card/70 transition-all duration-500 hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Guardian</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Pierwszy polski bot moderacyjny z prawdziwą AI. Wykrywa spam, toxic behavior, fake accounts. Uczy się
                  z każdym dniem.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    TensorFlow
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    NLP
                  </Badge>
                </div>
                <div className="text-sm text-primary font-semibold">500+ serwerów • 99.9% accuracy</div>
              </Card>

              <Card className="p-6 gangster-border bg-card/50 backdrop-blur-sm group hover:bg-card/70 transition-all duration-500 hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Crown className="w-6 h-6 text-primary group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-bold mb-2">VIP Manager Elite</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  System zarządzania premium członkami. Automatyczne benefity, ekskluzywne kanały, personalizowane
                  doświadczenia.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MongoDB
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Stripe
                  </Badge>
                </div>
                <div className="text-sm text-primary font-semibold">300+ serwerów • $50K+ revenue</div>
              </Card>
            </TabsContent>

            <TabsContent value="systems" className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105">
                <Trophy className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Tournament Master System</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kompletny system turniejowy dla społeczności esportowych. Automatyczne drabinki, live scoring,
                  integracja z Twitch, dystrybucja nagród. Obsłużył już ponad 500 turniejów.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">WebSocket</Badge>
                  <Badge variant="secondary">Twitch API</Badge>
                </div>
                <div className="text-primary font-semibold">500+ turniejów • $100K+ w nagrodach</div>
              </Card>

              <Card className="p-8 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Community Analytics Pro</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Zaawansowany system analityki społeczności. Tracking aktywności, sentiment analysis, predykcje
                  trendów, automatyczne raporty. Dane w czasie rzeczywistym.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">D3.js</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                </div>
                <div className="text-primary font-semibold">100+ społeczności • 1M+ datapoints</div>
              </Card>
            </TabsContent>

            <TabsContent value="tools" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105">
                <Code className="w-10 h-10 text-primary mb-3" />
                <h4 className="text-lg font-bold mb-2">Bot Builder CLI</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Narzędzie do szybkiego tworzenia botów Discord. Template generator, auto-deploy, monitoring.
                </p>
                <Badge variant="secondary" className="text-xs">
                  Open Source
                </Badge>
              </Card>

              <Card className="p-6 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105">
                <Zap className="w-10 h-10 text-primary mb-3" />
                <h4 className="text-lg font-bold mb-2">Performance Monitor</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Real-time monitoring botów. Alerts, metrics, auto-scaling, crash recovery.
                </p>
                <Badge variant="secondary" className="text-xs">
                  SaaS
                </Badge>
              </Card>

              <Card className="p-6 gangster-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 hover:scale-105">
                <Shield className="w-10 h-10 text-primary mb-3" />
                <h4 className="text-lg font-bold mb-2">Security Scanner</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Skanuje serwery Discord pod kątem zagrożeń bezpieczeństwa i podatności.
                </p>
                <Badge variant="secondary" className="text-xs">
                  Premium
                </Badge>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">Zrobimy coś razem?</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 animate-pulse"></div>
            <p className="text-xl text-muted-foreground text-pretty">
              Masz pomysł na bota lub system, który zmieni Twoją społeczność? Napisz do mnie - omówimy szczegóły i
              stworzymy coś naprawdę wyjątkowego.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Discord: bojkaclat
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-primary/10 bg-transparent hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub: @BinsterPL
            </Button>
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            <p>Odpowiadam zwykle w ciągu 2-4 godzin • Konsultacje za darmo • Tylko poważne projekty</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 bojkaclat • Discord Development z klasą • Made with 💀 in Poland
          </p>
        </div>
      </footer>
    </div>
  )
}
