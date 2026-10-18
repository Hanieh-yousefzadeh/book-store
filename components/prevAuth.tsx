"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreUser } from "@/redux/authSlice";
import type { dispatch } from "@/redux/store";

export default function PrevAuth() {
    const dispatch = useDispatch<dispatch>();

    useEffect(() => {
        const savedUser = localStorage.getItem("user");

      if (savedUser) {
            const user = JSON.parse(savedUser)
            dispatch(restoreUser(user))
        }
    }, [dispatch]);

    return null;
}