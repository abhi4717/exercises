odiTable <- data.frame(read.csv("C:/Users/Abhishek Gopalan/Desktop/ODI.txt",header = TRUE, sep = ";"))

# 1.	How many games has India won?
NROW(which(odiTable$Winner == " India"))

# 2. What is the highest score in an inning?
max(odiTable[,6:7])

# 3. How many games were played in 1980 and 2010?
NROW(which(odiTable$Matchyear == "1980"))
NROW(which(odiTable$Matchyear == "2010"))

# 4. How many games were won by India in 1980?
NROW(which(odiTable$Matchyear == 1980 & odiTable$Winner == " India"))

# 5. What is India's win % since 1980?
NROW(which(odiTable$Matchyear >= 1980 & odiTable$Winner == " India"))/NROW(which(odiTable$Matchyear >= 1980 & (odiTable$Team1 == " India" | odiTable$Team2 == " India")))*100

# 6. Who has won most games?
x <- aggregate(odiTable,list(Winner = odiTable$Winner),length)[,1:2]
x[order(x[,2],decreasing=TRUE),][1,1]