import { supabase } from "../libs/supabase";

export const getNews = async () => {
    try {
        const { data, error } = await supabase
            .from('news')
            .select('*')
        if (error) throw new Error(error);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getNewBySection = async (category) => {
    try {
        const { data, error } = await supabase
            .from('news')
            .select('*')
            .eq('category', category)

        if (error) throw new Error(error);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getNewBySlug = async (slug) => {
    try {
        const { data, error } = await supabase
            .from('news')
            .select('*')
            .eq('slug', slug)
            .limit(1)
        if (error) throw new Error(error);
        return data[0]
    } catch (error) {
        console.error(error);
    }
}