// Append one file at the end of another file
#include <stdio.h>
#include <stdlib.h>
int main()
{
   FILE *FP1, *FP2;
   char filename1[50], filename2[50];
    char ch;   

    printf("Enter main file (where data will be added): ");
    scanf("%s", filename1);

    printf("Enter file to append: ");
    scanf("%s", filename2);

    // Open the main file in append mode
    FP1 = fopen(filename1, "a");
    FP2 = fopen(filename2, "r");

    if (FP1 == NULL || FP2 == NULL)
    {
        printf("Error opening files.\n");
        return 1;
    }
    // Append contents of FP2 to FP1
    while ((ch = fgetc(FP2)) != EOF)
    {
        fputc(ch, FP1);
    }  
    printf("Contents of %s appended to %s successfully.\n", filename2, filename1);
    fclose(FP1);
    fclose(FP2);
    return 0;



    
 


}
