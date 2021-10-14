onEvent('recipes', (event) => {
	let recipes = [
    {output:
        ['3x rankine:fire_clay_ball'],input:
        ['4x kubejs:kaolin_dust', '4x kubejs:impure_alumina_dust', 'minecraft:clay_ball']},
    {output:
        [Fluid.of('kubejs:sulfuric_acid', 500)],input:
        ['2x #forge:dusts/sulfur', Fluid.of('minecraft:water', 500)]},
    {output:
        [Fluid.of('kubejs:cryolite', 500)],input:
        ['2x minecraft:glowstone_dust', 'kubejs:aluminium_hydroxide_dust', Fluid.of('kubejs:sulfuric_acid', 500)]},
    {output:
        ['3x rankine:vulcanized_rubber'],input:
        ['immersiveengineering:dust_sulfur', Fluid.of('rankine:latex', 500)]}
	]
	let heated = [
    {output:
        ['rankine:high_refractory_brick'],input:
        ['4x rankine:fire_clay_ball', '2x rankine:magnesia', '2x rankine:quicklime']},
    {output:
        ['kubejs:aluminium_hydroxide_dust'],input:
        ['rankine:sodium_hydroxide', '2x kubejs:washed_ore_bauxite']},
	{output:
        [Fluid.of('frostedheart:hot_water', 2000)],input:
        ['kubejs:activated_carbon', Fluid.of('minecraft:water', 2000)]}
	]
	recipes.forEach((recipe) => {
        event.recipes.createMixing(recipe.output, recipe.input);
    });
	heated.forEach((recipe) => {
        event.recipes.createMixing(recipe.output, recipe.input).heated();
    });
});