create or replace function public.heartbeat()
returns json
language sql
security invoker
as $$
  select json_build_object(
    'status', 'ok',
    'checked_at', now()
  );
$$;

grant execute on function public.heartbeat() to anon, authenticated;
