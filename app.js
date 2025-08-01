/*********************************************************************************************************************
 * Objetivo: Realizar o cálculo de médias escolares, trabalhando com entrada de dados, variáveis, e condicionais
 * Autor: Enzo
 * Data: 01/08/2025
 * Versão: 1.0
 *********************************************************************************************************************/

/**Formas de criar variáveis
 * LET -> Permite riar um espaço em memória (variável), deve-se obrigatoriamente utilizar apenas dentro de um 
 *        bloco(If, Loop, Function). Essa variável nasce e morre dentro deste bloco
 * VAR -> Permite criar um espaço em memória (variávle), porém é um método mais antigo do JS, quase não se utiliza 
 *        mais em projetos
 * CONST -> Permite em criar um espaço em memória (constante), cujo conteúdo não sofre mudança durante o programa.
 *          Podemos criar um const em qualquer parte do código. OBS: Recomenda-se que a escrita de uma CONST seja em 
 *          MAIUSCULO
 * 
 * 
 * Formas de conversão de dados
 * String() -> permite converter um objeto ou variável em string
 * Number() -> Permite converter um obketo ou variável em número (inteiro ou float)
 * parseInt() -> Prmite converter um objeto ou variável em Inteiro
 * parseFloat -> Permite converter um obketo ou variável em decimal
 * Boolean -> Permite converter um objeto em valor booleano (true/false)
 * Object() -> Permite converter uma variável em objeto (Array, Json, Classe)
 * 
 * toFixed() -> Permite limitar a quantidade de casas decimais
 * 
 * 
 * Operadores de Comparação
 * 
 * ==  -> Validação de igualdade entre conteúdos
 * <   -> Validação de menor valor
 * >   -> Validação de maior valor
 * >=  -> Validação de maior valor ou igualdade
 * <=  -> Validação menor valorou igualdade
 * !=  -> Validação de diferença entre conteúdos
 * === -> Validação de igualdade entre conteúdos e igualdade nos tipos de dados
 * !== -> Validação de diferença entre conteúdos e igualdade nos tipos de dados 
 *        (sempre verificar a documentação da linguagem)
 * !=! -> Validação de diferença entre conteúdos e diferença entre tipos de dados 
 *        (sempre verificar a documentação da linguagem)
 * 
 * 
 * Operadores Lógicos 
 * E   AND &&
 * OU  OR  ||
 * Não NOT !
 */


//Import da biblioteca do readline
var readline = require('readline')

//Criando um objeto para a entrada e saída de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno:', function(nome){
    //Recebe o call back e converte para MAIUSCULO
    let nomeAluno = String(nome).toUpperCase()

    //entrada de dados da nota 1
    entradaDeDados.question('Digite a nota 1:', function(valor1){
        let nota1 = valor1

        //entrada de dados da nota 2
        entradaDeDados.question('Digite a nota 2:', function(valor2){
            let nota2  = valor2

            //entrada de dados da nota 3
            entradaDeDados.question('Digite a nota 3:', function(valor3){
                let nota3 = valor3

                //entrada de dados da nota 4
                entradaDeDados.question('Digite a nota 4:', function(valor4){
                    let nota4 = valor4
                    
                    if(nota1 == '' || nota2 ==''|| nota3 == '' || nota4== '' || nomeAluno == ''){
                        console.log('ERRO: Existem campos que não foram preenchidos')

                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                        console.log('ERRO: Não é possível calcular com a entrada de letras')

                    }else if(Number(nota1) <  0 || Number(nota1) > 10 || Number(nota2) < 0 || Number(nota2)  > 10 || Number(nota3) < 0 || Number(nota3)  > 10 || Number(nota4)< 0 || Number(nota4) > 10){
                        console.log('ERRO: os valores informados precisam ser entre 0 até 10.')
                    
                    }else{
                        let media = (Number(nota1) +Number(nota2) + Number(nota3) + Number(nota4))/4
                        let statusAluno 

                        if(media < 5){
                            statusAluno = 'REPROVADO'
                        }else if(media < 7 && media >= 5){
                            statusAluno = 'EXAME'
                        }else if(media >=7 && media <= 10){
                            statusAluno = 'APROVADO'
                        }

                        console.log(`O aluno(a) ${nomeAluno} teve a média:${media.toFixed(1)} e está: ${statusAluno}`)
                    }
                })
            })
        })
    })
})