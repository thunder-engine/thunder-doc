.. _api_SpriteRender:
SpriteRender Class
================

Inherited: :ref:`Renderable<api_Renderable>`

.. _api_SpriteRender_description:
Description
-----------

The SpriteRender component allows you to display images as sprites to use in both 2D and 3D scenes.



.. _api_SpriteRender_public:
Public Methods
--------------

+-------------------------------------+------------------------------------------------------------------------+
|         :ref:`Vector4<api_Vector4>` | :ref:`color<api_SpriteRender_color>` () const                          |
+-------------------------------------+------------------------------------------------------------------------+
| :ref:`std::string<api_std::string>` | :ref:`item<api_SpriteRender_item>` () const                            |
+-------------------------------------+------------------------------------------------------------------------+
|     :ref:`Material<api_Material>` * | :ref:`material<api_SpriteRender_material>` () const                    |
+-------------------------------------+------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setColor<api_SpriteRender_setColor>` (const Vector4 & color)     |
+-------------------------------------+------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setItem<api_SpriteRender_setItem>` (const std::string & item)    |
+-------------------------------------+------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setMaterial<api_SpriteRender_setMaterial>` (Material * material) |
+-------------------------------------+------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setSize<api_SpriteRender_setSize>` (const Vector2 & size)        |
+-------------------------------------+------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setSprite<api_SpriteRender_setSprite>` (Sprite * sprite)         |
+-------------------------------------+------------------------------------------------------------------------+
|               :ref:`void<api_void>` | :ref:`setTexture<api_SpriteRender_setTexture>` (Texture * texture)     |
+-------------------------------------+------------------------------------------------------------------------+
|         :ref:`Vector2<api_Vector2>` | :ref:`size<api_SpriteRender_size>` () const                            |
+-------------------------------------+------------------------------------------------------------------------+
|         :ref:`Sprite<api_Sprite>` * | :ref:`sprite<api_SpriteRender_sprite>` () const                        |
+-------------------------------------+------------------------------------------------------------------------+
|       :ref:`Texture<api_Texture>` * | :ref:`texture<api_SpriteRender_texture>` () const                      |
+-------------------------------------+------------------------------------------------------------------------+



.. _api_SpriteRender_static:
Static Methods
--------------

None

.. _api_SpriteRender_methods:
Methods Description
-------------------

.. _api_SpriteRender_color:

:ref:`Vector4<api_Vector4>`  **SpriteRender::color** () const

Returns the color of the sprite to be drawn.

**See also** setColor().

----

.. _api_SpriteRender_item:

:ref:`std::string<api_std::string>`  **SpriteRender::item** () const

Returns the current item name of sprite from the sprite sheet.

**See also** setItem().

----

.. _api_SpriteRender_material:

:ref:`Material<api_Material>` * **SpriteRender::material** () const

Returns an instantiated Material assigned to SpriteRender.

**See also** setMaterial().

----

.. _api_SpriteRender_setColor:

:ref:`void<api_void>`  **SpriteRender::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the sprite to be drawn.

**See also** *color*().

----

.. _api_SpriteRender_setItem:

:ref:`void<api_void>`  **SpriteRender::setItem** (:ref:`std::string<api_std::string>` & *item*)

Sets the current sub *item* name of sprite from the sprite sheet.

**See also** *item*().

----

.. _api_SpriteRender_setMaterial:

:ref:`void<api_void>`  **SpriteRender::setMaterial** (:ref:`Material<api_Material>` * *material*)

Creates a new instance of *material* and assigns it.

**See also** *material*().

----

.. _api_SpriteRender_setSize:

:ref:`void<api_void>`  **SpriteRender::setSize** (:ref:`Vector2<api_Vector2>` & *size*)

Sets a new *size* of sprite.

**See also** *size*().

----

.. _api_SpriteRender_setSprite:

:ref:`void<api_void>`  **SpriteRender::setSprite** (:ref:`Sprite<api_Sprite>` * *sprite*)

Replaces current *sprite* with a new one.

**See also** *sprite*().

----

.. _api_SpriteRender_setTexture:

:ref:`void<api_void>`  **SpriteRender::setTexture** (:ref:`Texture<api_Texture>` * *texture*)

Replaces current *texture* with a new one.

**See also** *texture*().

----

.. _api_SpriteRender_size:

:ref:`Vector2<api_Vector2>`  **SpriteRender::size** () const

Returns size of sprite.

**See also** setSize().

----

.. _api_SpriteRender_sprite:

:ref:`Sprite<api_Sprite>` * **SpriteRender::sprite** () const

Returns a sprite.

**See also** setSprite().

----

.. _api_SpriteRender_texture:

:ref:`Texture<api_Texture>` * **SpriteRender::texture** () const

Returns current assigned texture.

**See also** setTexture().

----


