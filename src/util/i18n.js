import languageConfig from './language.json';


const i18n=( keyword,placeHolder, value)=>{
    const language=localStorage.getItem("language") || "en";

    const text=languageConfig[language][keyword];
    if(placeHolder && value){
        return text.replace(placeHolder,value);
    }
 return text;
}
export default i18n;