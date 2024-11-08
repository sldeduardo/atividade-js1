    function mascara_telefone ()
        {
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) 
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
           
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }
        
        function mascara_cep()
        { var cep_formatado = document.getElementById("cep").value
            
        
            if (cep_formatado[5]!="-")
            {
                if(cep_formatado[5]!=undefined)
                {
                    document.getElementById("cep").value=cep_formatado.slice(0,5)+"-"+cep_formatado[5]
                }
            }

        }    

        function mascara_cpf()
        { var cpf_formatado = document.getElementById("cpf").value

            if (cpf_formatado[3]!=".")
            {
                if (cpf_formatado[3]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3]
                }
            }
        
           if (cpf_formatado[7]!=".")
            {
                if(cpf_formatado[7]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7]
                }
            }

            if (cpf_formatado[11]!="-")
            {
                if(cpf_formatado[11]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[10]
                }
            }
        }

        const cnpj=document.querySelector('#cnpj')
         cnpj.addEventListener('keypress',()=>{
            let cnpjlength=cnpj.value.length
           if(cnpjlength===2|| cnpjlength===6){
            cnpj.value+='.'
           }else if (cnpjlength===10){
            cnpj.value+='/0001.'
           }
           else if(cnpjlength===12){
            cnpj.value+='-'
           }
         })

         const cdg=document.querySelector('#cdg')
         cdg.addEventListener('keypress',()=>{
            let cdglength=cdg.value.length
           if(cdglength===2){
            cdg.value+='_'
           }else if (cdglength===5){
            cdg.value+='//'
           }
           else if(cdglength===10){
            cdg.value+='-'
           }
           else if(cdglength===14){
            cdg.value+='.9.'
           }
         })