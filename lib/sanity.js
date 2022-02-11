import sanityClient from '@sanity/client';

export const client = sanityClient({
	projectId: 'pchsn06w',
	dataset: 'production',
	apiVersion: '2022-02-11',
	token:
		'skr6flOp8hRv0PavjPioTMI9NaaMmEkqf5h0cGD6MAswFP4gAxnUhOCY1jl4iGiOYvgzjmlHZXKWmOkV37f1qwe3JuFtHTj8u4lFDgHXRur8x1GzEBEfjugUivDntGZP2p8Cb5EpVgxuDGgBd7v9o0wRT2yc1ZySAC15W1BJYOl5CBgfPcNF',
	useCdn: false,
});
