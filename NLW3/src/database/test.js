const Database = require('./db');

const saveOrfanato = require('./saveOrphanage')

Database.then(async (db) => {
    // inserir dados na tabela e consultar dados na tabela
   await saveOrfanato(db, {
        lat: "-22.9732303",
        lng: "-43.2032649",
        name: "lar de amor-copacabana",
        about: "presta assistencia a crianças de 6 a 15 anos que se encontre em situaçao de risco e vulnerabilidade social",
        whatsapp: "999735467957",
        images: [
            "https://images.unsplash.com/photo-1601725591042-d657de65a47b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions: "venha se sentir a vontade e traga muito amor e paciencia para dar",
        opening_hours: "horarios de visitas das 18hs às 8hs",
        open_on_weekends: "0"
   })
    //consultar dados da tabela
    const selectdOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectdOrphanages )

    // consultar apenas um orphanato
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    //deletar dados na tabela
    const del = await db.run('SELECT * FROM orphanages WHERE id = "2"')
})