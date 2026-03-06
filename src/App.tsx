import { ArtDecoSunburst } from "@/components/ArtDecoSunburst";
import { ArtDecoDivider } from "@/components/ArtDecoDivider";
import { ServiceCard } from "@/components/ServiceCard";
import { CTAForm } from "@/components/CTAForm";

function App() {
  return (
    <main className="min-h-screen bg-background dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <ArtDecoSunburst />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Decorative top element */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-primary" />
              <div className="w-3 h-3 rotate-45 border border-primary" />
              <div className="w-16 h-px bg-primary" />
            </div>
          </div>

          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">Закрытый деловой клуб</p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            <span className="text-gold-gradient">Капитал</span> на банкротстве
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Партнёрская сеть для тех, кто зарабатывает на процедурах банкротства. Нетворкинг, сделки и знания в одном закрытом клубе.
          </p>

          {/* Decorative bottom element */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-primary" />
              <div className="w-2 h-2 rotate-45 bg-primary" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="stepped" />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Почему банкротство</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight text-balance">
                Там, где другие видят крах — мы видим возможность
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Рынок банкротств в России — один из немногих, где опытный партнёр может системно извлекать прибыль: выкуп активов с дисконтом, участие в торгах, кредиторские права и субсидиарная ответственность.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Наш клуб объединяет арбитражных управляющих, юристов, инвесторов и предпринимателей, которые совместно работают с делами о банкротстве и делят прибыль по прозрачным партнёрским схемам.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Форматы участия</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Партнёрство на каждом этапе</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Торги по банкротству"
              description="Совместная покупка активов банкротов с дисконтом 30–70%. Недвижимость, оборудование, транспорт — отбираем и анализируем лоты вместе."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <path d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z" />
                  <path d="M8 5h8M8 12h5M8 19h10" />
                </svg>
              }
            />
            <ServiceCard
              title="Кредиторские права"
              description="Выкуп требований кредиторов с дисконтом и профессиональное управление ими в процедуре. Высокая доходность при грамотной стратегии."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                  <path d="M9 12h3" />
                </svg>
              }
            />
            <ServiceCard
              title="Нетворкинг и сделки"
              description="Закрытые встречи клуба, разбор кейсов, совместные сделки. Прямой доступ к арбитражным управляющим, юристам и инвесторам рынка."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <circle cx="5" cy="12" r="3" />
                  <circle cx="19" cy="5" r="3" />
                  <circle cx="19" cy="19" r="3" />
                  <path d="M8 12h8M16 6.5l-8 4M16 17.5l-8-4" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ArtDecoDivider variant="fan" />

          <div className="relative text-center py-12">
            {/* Quote decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/20 font-serif text-9xl leading-none">
              &ldquo;
            </div>

            <blockquote className="relative z-10">
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic mb-8">
                За первые полгода участия в клубе я закрыл три сделки по торгам и вышел на доходность, которую раньше считал недостижимой в легальных инструментах.
              </p>
              <footer className="text-muted-foreground">
                <span className="text-primary">—</span> Участник клуба,{" "}
                <span className="text-primary">арбитражный инвестор</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ArtDecoSunburst />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <ArtDecoDivider variant="chevron" />
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Войдите в круг партнёров</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">Подать заявку на вступление</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Клуб работает в закрытом формате. Оставьте заявку — мы свяжемся, расскажем об условиях и первых возможностях для партнёрства.
            </p>
          </div>

          <div className="relative p-8 md:p-12 border border-border">
            {/* Decorative frame corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />

            <CTAForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="font-serif text-xl text-foreground">Капитал на банкротстве</span>
              <div className="w-12 h-px bg-primary" />
            </div>

            <p className="text-muted-foreground text-sm text-center max-w-md">
              Закрытый деловой клуб для партнёрства в сфере банкротств. Участие только по заявке.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-border" />
              <div className="w-1.5 h-1.5 rotate-45 bg-primary/50" />
              <div className="w-8 h-px bg-border" />
            </div>

            <p className="text-muted-foreground/50 text-xs">© 2024 Капитал на банкротстве. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
