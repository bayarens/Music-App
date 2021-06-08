--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: songs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.songs (
    title text,
    artist text,
    duration integer,
    album text,
    tracklist integer,
    features text,
    id integer NOT NULL
);


--
-- Name: songs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.songs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: songs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.songs_id_seq OWNED BY public.songs.id;


--
-- Name: songs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.songs ALTER COLUMN id SET DEFAULT nextval('public.songs_id_seq'::regclass);


--
-- Data for Name: songs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.songs (title, artist, duration, album, tracklist, features, id) FROM stdin;
my.life	J.Cole	218	The Off-Season	3	21 Savage & Morray	3
applying.pressure	J.Cole	177	The Off-Season	4	\N	4
amari	J.Cole	148	The Off-Season	2	\N	2
punchin'.the.clock	J.Cole	122	The Off-Season	5	\N	5
100.mil'	J.Cole	163	The Off-Season	6	Bas	6
pride.is.the.devil	J.Cole	218	The Off-Season	7	Lil Baby	7
let.go.my.hand	J.Cole	266	The Off-Season	8	Bas & 6LACK	8
interlude	J.Cole	133	The Off-Season	9	\N	9
the.climb.back	J.Cole	306	The Off-Season	10	\N	10
close	J.Cole	168	The Off-Season	11	\N	11
hunger.on.hillside	J.Cole	238	The Off-Season	12	Bas	41
\.


--
-- Name: songs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.songs_id_seq', 42, true);


--
-- PostgreSQL database dump complete
--

