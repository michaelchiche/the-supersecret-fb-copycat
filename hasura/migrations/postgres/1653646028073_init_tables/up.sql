SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.comment (
    id integer NOT NULL,
    commentator integer NOT NULL,
    comment text NOT NULL,
    post_id integer,
    reply_to_id integer,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.comment IS 'comments';
CREATE SEQUENCE public.comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.comment_id_seq OWNED BY public.comment.id;
CREATE TABLE public.post (
    id integer NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    author_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.post_id_seq OWNED BY public.post.id;
CREATE TABLE public.upvote (
    id integer NOT NULL,
    upvoter_id integer NOT NULL,
    upvoted_comment_id integer NOT NULL
);
COMMENT ON TABLE public.upvote IS 'upvotes';
CREATE SEQUENCE public.upvote_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.upvote_id_seq OWNED BY public.upvote.id;
CREATE TABLE public."user" (
    id integer NOT NULL,
    firstname text NOT NULL,
    lastname text NOT NULL,
    avatar text NOT NULL
);
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
ALTER TABLE ONLY public.comment ALTER COLUMN id SET DEFAULT nextval('public.comment_id_seq'::regclass);
ALTER TABLE ONLY public.post ALTER COLUMN id SET DEFAULT nextval('public.post_id_seq'::regclass);
ALTER TABLE ONLY public.upvote ALTER COLUMN id SET DEFAULT nextval('public.upvote_id_seq'::regclass);
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.upvote
    ADD CONSTRAINT upvote_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.upvote
    ADD CONSTRAINT upvote_upvoter_id_upvoted_comment_id_key UNIQUE (upvoter_id, upvoted_comment_id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_comment_updated_at BEFORE UPDATE ON public.comment FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_comment_updated_at ON public.comment IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_post_updated_at BEFORE UPDATE ON public.post FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_post_updated_at ON public.post IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_commentator_fkey FOREIGN KEY (commentator) REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.post(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_reply_to_id_fkey FOREIGN KEY (reply_to_id) REFERENCES public.comment(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_author_id_fkey FOREIGN KEY (author_id) REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.upvote
    ADD CONSTRAINT upvote_upvoted_comment_id_fkey FOREIGN KEY (upvoted_comment_id) REFERENCES public.comment(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.upvote
    ADD CONSTRAINT upvote_upvoter_id_fkey FOREIGN KEY (upvoter_id) REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;
