import React, {Component} from "react";
import { 
  View,
  Text, 
  StyleSheet, 
  Image, TouchableOpacity, TextInput, ScrollView
} from "react-native";

 class Cronometro extends Component {
  
   constructor(props){
     super(props);
     this.state = {
       numero:0,
       botao: 'INICIAR',
       mensagens:[<Text>Numero de voltas:</Text>]
      
      }

     this.timer = null;
     this.iniciar=this.iniciar.bind(this);
     this.limpar=this.limpar.bind(this);
}
    iniciar(){
     if(this.timer != null){
       clearInterval(this.timer);
       this.timer = null;
       this.setState({botao: 'INICIAR'});
     }else{
       this.timer = setInterval(()=>{this.setState({numero: this.state.numero +0.1})},100)
       this.setState({botao:'PAUSAR'});
     }
   }
 
   limpar(){
     if(this.timer != null){
       clearInterval(this.timer);
       this.timer=null;
      }
      let{mensagens}=this.state;
      this.state.mensagens.push(<Text>{this.state.numero.toFixed(2)}</Text>)
      this.setState({mensagens: [mensagens]})
      this.setState({numero:0, botao:'INICIAR'})
   }
  

  render(){
    return(
      <ScrollView>
      <View style={estilo1.alinharTexto}>
        <Image 
          style={{width:120, height:120}}
          source={require('../../imagens/cronometropng.png')}
        />
        <Text >{this.state.numero.toFixed(2)}</Text>
        <View style ={estilo1.areaBotoes}>
          <TouchableOpacity style={estilo1.botoes} onPress={this.iniciar}>
            <Text >{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilo1.botoes}onPress={this.limpar} >
            <Text >ZERAR</Text>
          </TouchableOpacity>
        </View>
      </View>
        <View style={estilo1.alinharTexto}>
          {this.state.mensagens}
        </View>
      </ScrollView>
    )
  }
}

const estilo1 = StyleSheet.create({
  alinharTexto:{
    alignItems: "center",
    justifyContent:"center",
    flex:1
  },
  botoes:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'seagreen',
    height:40,
    margin:15,
    flex:1
  },
  areaBotoes:{
    flexDirection: 'row'
  } 
})
export default Cronometro;