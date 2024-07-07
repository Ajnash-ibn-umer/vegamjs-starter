    import Vegam from "vegamjs";

    
    const s=new Vegam()

    s.get("/",ctx=>{
        ctx.res.json({message:"hai"})
    })

    s.listen(8000)