import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useActiveSessions = () => {
  const reasult = useQuery({
    queryKey: ["activeSessions"],
    queryFn: sessionApi.getActiveSessions,
  });
  return reasult;
};

export const useCreateSession = () => {
  const result = useMutation({
    mutationKey: ["createSession"],
    mutationFn: sessionApi.createSession,
    onSuccess: () => toast.success("Session created successfully..."),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to create room"),
  })
  return result;
}

export const useMyRecentSessions = () => {
  const reasult = useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: sessionApi.getMyRecentSessions,
  });
  return reasult;
};


export const useSessionById = (id) => {
  const reasult = useQuery({
    queryKey: ["session", id],
    queryFn: () => sessionApi.getSessionById(id),
    enabled: !!id,
    refetchInterval: 5000 // refetch every 5sec to see session status changes
  });
  return reasult;
};

export const useJoinSession = (id) => {
  const result = useMutation({
    mutationKey: ["joinSession"],
    mutationFn: () => sessionApi.JoinSession(id),
    onSuccess: () => toast.success("Joined Session Successfully..."),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to join session"),
  })
  return result;
}

export const useEndSession = (id) => {
  const result = useMutation({
    mutationKey: ["endSession"],
    mutationFn: () => sessionApi.endSession(id),
    onSuccess: () => toast.success("Session Ended Successfully..."),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to join session"),
  })
  return result;
}


