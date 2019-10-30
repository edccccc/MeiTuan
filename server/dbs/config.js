module.exports={
    dbs:"mongodb://127.0.0.1:27017/meituan",
    redis:{
        get host(){
            return '127.0.0.1'
        },
        get prot(){
            return 6379
        },
        smtp:{
            get host(){
                return 'smtp.qq.com'
            },
            get user(){
                return '825231573@qq.com'
            },
            get pass(){
                return 'iwftqgotyniobfic'
            },
            get code(){
                return Math.random.toString(16).slice(2,6).toUpperCase()
            },
            get expire(){
                return ()=>{
                    return new Date().getTime()+60*60*1000
                }
            }
        }
    }
}