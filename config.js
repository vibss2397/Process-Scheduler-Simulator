var json = {
    "Round Robin":{
        "config":{
            "Time Slice": [5, "Enter a value(in sec)"],
            "Context Switch": [1, "Enter a value(in sec)"] 
        },
        "dynamic" : 1,
        "TCB":["Id", "Arrival", "Duration"],
        "Process_list": []
    },
    "Rate Monotonic":{
        "config":{
            "Conf":["0 Config", "This Algorithm has no Config"],
            "Combined Period": ["Will be decided when adding processes"]
        },
        "dynamic": 0,
        "TCB":["Id", "Period", "Duration"],
        "Process_list": []

    },
    "Earliest Deadline":{
        "config":{
            "Conf":["0 Config", "This Algorithm has no Config"]
        },
        "dynamic": 1,
        "TCB":["Id", "Period", "Duration"],
        "Process_list": []
    },
    "waiting": [],
    "ready": [],
    "suspended":[]

}