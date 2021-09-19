onEvent('recipes', (event) => {
    const flint_change_recipes = [
        flint_shapedRecipe(Item.of('stone_age:dried_grass_bed'), ['  B', 'BBB', 'AAA'], {
            A: Ingredient.of('#minecraft:wooden_slabs').toJson(),
            B: Item.of('charcoal_pit:straw').toJson()
        },Ingredient.of('#forge:axes')),
		flint_shapedRecipe(Item.of('charcoal_pit:log_pile'), ['AAA', 'AAA', 'AAA'], {
            A: Ingredient.of('#minecraft:logs_that_burn').toJson()
        },Ingredient.of('#forge:axes')),
		flint_shapedRecipe(Item.of('minecraft:crafting_table'), ['AAA', 'BBB', 'CCC'], {
			A: Item.of('minecraft:iron_ingot').toJson(),
            B: Ingredient.of('#immersiveengineering:treated_wood_horizontal').toJson(),
            C: Ingredient.of('#immersiveengineering:slab_treated_wood_horizontal').toJson()
        },Ingredient.of('#notreepunching:saws')),
		flint_shapedRecipe(Item.of('stone_age:millstone'), [' B ', ' C ', 'AAA'], {
            A: Ingredient.of('#forge:stone').toJson(),
            B: Item.of('minecraft:stick').toJson(),
			C: Item.of('minecraft:stone').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('charcoal_pit:main_bloomery'), ['ABA', 'BCB', 'ABA'], {
            A: Item.of('rankine:mortar').toJson(),
            B: Item.of('steampowered:bronze_sheet').toJson(),
			C: Item.of('charcoal_pit:sandy_brick').toJson()
        },Item.of('stone_age:flint_knife'))
    ]
    const change_recipes = [
	    flint_shapedRecipe(Item.of('charcoal_pit:sandy_tuyere'), ['BAB', 'ACA', 'BAB'], {
            A: Item.of('rankine:mortar').toJson(),
            B: Item.of('charcoal_pit:sandy_brick_item').toJson(),
			C: Ingredient.of('#forge:plates/copper').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('immersiveengineering:alloybrick',2), ['BA', 'AB'], {
            A: Item.of('minecraft:brick').toJson(),
            B: Ingredient.of('#forge:plates/copper').toJson()
        },Item.of('stone_age:flint_knife')),	
		flint_shapedRecipe(Item.of('charcoal_pit:bellows'), ['ABA', 'CCC', 'ABA'], {
            A: Item.of('immersiveengineering:treated_wood_horizontal').toJson(),
            B: Item.of('immersiveengineering:slab_treated_wood_horizontal').toJson(),
			C: Item.of('minecraft:leather').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('charcoal_pit:sandy_brick',2), ['BAB', 'ABA', 'BAB'], {
            A: Item.of('rankine:mortar').toJson(),
            B: Item.of('charcoal_pit:sandy_brick_item').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('charcoal_pit:unfired_sandy_brick',4), ['ABA', 'BAB', 'ABA'], {
            A: Item.of('minecraft:sand').toJson(),
            B: Item.of('minecraft:clay_ball').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('rankine:flint_pickaxe'), ['ABA', ' C ', ' C '], {
            A: Item.of('minecraft:flint').toJson(),
            B: Item.of('rankine:rope').toJson(),
			C: Item.of('minecraft:stick').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('rankine:flint_axe'), ['AB', 'AC', ' C'], {
            A: Item.of('minecraft:flint').toJson(),
            B: Item.of('rankine:rope').toJson(),
			C: Item.of('minecraft:stick').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('rankine:flint_spear'), [' AA', ' BA', 'C  '], {
            A: Item.of('minecraft:flint').toJson(),
            B: Item.of('rankine:rope').toJson(),
			C: Item.of('minecraft:stick').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('rankine:flint_shovel'), ['A', 'B', 'C'], {
            A: Item.of('minecraft:flint').toJson(),
            B: Item.of('rankine:rope').toJson(),
			C: Item.of('minecraft:stick').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('charcoal_pit:clay_pot'), ['AAA', 'A A', 'AAA'], {
            A: Item.of('minecraft:clay_ball').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('charcoal_pit:barrel'), ['AAA', 'A A', 'AAA'], {
            A: Ingredient.of('#minecraft:wooden_slabs').toJson()
        },Ingredient.of('#forge:axes')),
		flint_shapedRecipe(Item.of('rankine:bronze_door>'), ['AA', 'AA', 'AA'], {
            A: Ingredient.of('#forge:ingots/bronze').toJson()
        },Item.of('stone_age:flint_knife'))
	]
	
	const recipes = [
	    flint_shapedRecipe(Item.of('immersiveengineering:hammer'), [' AC', ' BA', 'B  '], {
            A: Ingredient.of('#forge:ingots/copper').toJson(),
			B: Ingredient.of('#forge:rods/wooden').toJson(),
            C: Item.of('stone_age:leather_strip').toJson()
        },Item.of('stone_age:flint_knife')),
	    flint_shapedRecipe(Item.of('minecraft:campfire'), [' B ', 'ABA', 'ACA'], {
            A: Ingredient.of('#minecraft:logs').toJson(),
            B: Item.of('charcoal_pit:straw').toJson(),
			C: Item.of('minecraft:gravel').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('charcoal_pit:sandy_collector'), ['A A', 'ABA', 'AAA'], {
            A: Item.of('charcoal_pit:sandy_brick_item').toJson(),
            B: Item.of('notreepunching:ceramic_bucket').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('notreepunching:iron_saw'), ['  A', ' AB', 'AB '], {
            A: Ingredient.of('#forge:rods/wooden').toJson(),
            B: Item.of('minecraft:iron_ingot').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('minecraft:stone_bricks',5), ['ABA', 'BAB', 'ABA'], {
            A: Item.of('minecraft:stone').toJson(),
            B: Item.of('rankine:mortar').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('frostedheart:generator_brick',3), ['ABA', 'BAB', 'ABA'], {
            A: Item.of('minecraft:stone_bricks').toJson(),
            B: Item.of('minecraft:brick').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('frostedheart:generator_amplifier_r1',2), ['ABA', 'DCD', 'ABA'], {
            A: Item.of('minecraft:stone_bricks').toJson(),
            B: Item.of('minecraft:brick').toJson(),
			C: Ingredient.of('#forge:plates/copper').toJson(),
			D: Item.of('minecraft:clay_ball').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('frostedheart:generator_core_t1'), ['ACA', 'CBC', 'ACA'], {
            A: Item.of('minecraft:brick').toJson(),
            B: Item.of('frostedheart:energy_core').toJson(),
			C: Ingredient.of('#forge:ingots/copper').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('rankine:bronze_hammer'), ['AAC', ' BA', 'B A'], {
            A: Ingredient.of('#forge:ingots/bronze').toJson(),
            B: Item.of('minecraft:stick').toJson(),
			C: Item.of('stone_age:leather_strip').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('rankine:stone_hammer'), ['AAC', ' BA', 'B A'], {
            A: Item.of('minecraft:stone').toJson(),
            B: Item.of('minecraft:stick').toJson(),
			C: Ingredient.of('#forge:string').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('frostedheart:rye_bread'), ['AAA'], {
            A: Item.of('frostedheart:rye').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('watersource:wooden_cup',2), ['A A', 'A A', ' A '], {
            A: Ingredient.of('#minecraft:planks').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('wooden_water_filter'), ['BCB', 'AAA', 'BCB'], {
            A: Ingredient.of('#minecraft:planks').toJson(),
            B: Ingredient.of('#minecraft:logs').toJson(),
			C: Item.of('minecraft:glass').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('primitive_strainer'), ['AAA', 'BBB', 'CCC'], {
            A: Item.of('minecraft:charcoal').toJson(),
            B: Item.of('minecraft:sand').toJson(),
			C: Item.of('minecraft:clay_ball').toJson()
        },Item.of('stone_age:flint_knife')),
		flint_shapedRecipe(Item.of('stone_age:fish_bone',2), ['ABA'], {
            A: Item.of('minecraft:bone').toJson(),
            B: Item.of('minecraft:flint').toJson()
        },Item.of('stone_age:flint_knife'))
	]
	
	event.remove({output: 'charcoal_pit:unfired_sandy_brick', type: 'minecraft:crafting_shapeless'});
	
	recipes.forEach((recipe) => {
        event.custom({
                "type": "stone_age:flint_workbench",
                "pattern": recipe.pattern,
                "key": recipe.key,
				"tool": recipe.tool.toJson(),
				"result":recipe.result.toResultJson()
            })
        })
		
	change_recipes.forEach((recipe) => {
		event.remove({output: recipe.result, type: 'minecraft:crafting_shaped'});
            event.custom({
                "type": "stone_age:flint_workbench",
                "pattern": recipe.pattern,
                "key": recipe.key,
				"tool": recipe.tool.toJson(),
				"result":recipe.result.toResultJson()
            })
        })
    flint_change_recipes.forEach((recipe) => {
		event.remove({output: recipe.result, type: 'stone_age:flint_workbench'});
            event.custom({
                "type": "stone_age:flint_workbench",
                "pattern": recipe.pattern,
                "key": recipe.key,
				"tool": recipe.tool.toJson(),
				"result":recipe.result.toResultJson()
            })
        })
});