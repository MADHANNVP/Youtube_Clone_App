export const API_KEY = 'AIzaSyDDXNUyZqhXf3IgZ_4UcJuff4NdAg4HlCY'

export const conver_value = (value) => {
    
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value >= 1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}