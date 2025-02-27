// Enum -> faz a nomeação de constantes, melhorando a legibilidade do código. Ao utilizar Enum, podemos substituir números por constantes, facilitando a compreensão do código. Enum é útil para evitar "números mágicos" e tornar o código mais legível, especialmente para novos membros da equipe.

enum Profile {
  Admin = 1,
  Client = 2,
  Seller = 3
}

let profile: number = Profile.Admin

console.log(profile)