croatianLetters = {"c=":"c", "c-":"b", "dz=":"d", "d-":"e",
                   "lj":"l", "nj":"n", "s=":"s", "z=":"z"}

s = input()
for k, v in croatianLetters.items():
	s = s.replace(k, v)
print(len(s))