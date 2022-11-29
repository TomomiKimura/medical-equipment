#!/usr/bin/env zsh

_kill_process_listening_at() {
    _PORT="$1"
    _PID="$(lsof -i ":$_PORT" -S | grep LISTEN | awk '{print $2}')"
    if [ -n "$_PID" ]; then
        echo "Killing process $_PID which was listening to port $_PORT"
        kill -9 "$_PID"
    fi
}

_kill_process_listening_at 3000
_kill_process_listening_at 3001
_kill_process_listening_at 6006

echo "Done!"
