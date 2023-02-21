# Práce s řetězci, podmínky - Lekce 4

Doporučené úložky na doma pro kurz JavaScript 1 od Czechitas.

## 1. FIT email

Pokud se přihlásíte jako student například na Fakultu Informačních Technologií ČVUT, bude vám informačním systémem automaticky přidělen e-mail, který se vytvoří z vašeho jména a příjmení. Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. Výsledek se převede na malá písmena a připojí se doména `fit.cvut.cz`. Pro jméno Jana Procházková tak vznikne adresa `prochjan@fit.cvut.cz`.

- Vytvořte webovou stránku, která **požádá uživatele** nejdříve o jeho **křestní jméno** a pak **příjmení**, obojí bez diakritiky.
- Pomocí metody `trim` zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci **žádné bílé znaky**.
- Pomocí metody `slice` **vyřízněte** ze jména i příjmení **příslušné části**.
- Pomocí **interpolace řetězců** sestavte výslednou adresu a vypište ji do stránky.


## 2. Množstevní slevy

Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu objednaný kusů. Při objednávce **pod 50 kusů** stojí **jedno tričko 300 Kč**. Pokud si objednáme **alespoň 50 kusů**, je cena **250 Kč** za kus. Při objednávce **nad 200 kusů** je cena **200 Kč** za tričko. **Nad 500 kusů** zaplatíme **150 Kč** za tričko a **nad 1000 kusů** zaplatíme **120 korun** za tričko.

Napište stránku, která od uživatele obdrží **počet kusů**, které si chce objednat, a program **odpoví celkovou ceny objednávky** výpisem do stránky.