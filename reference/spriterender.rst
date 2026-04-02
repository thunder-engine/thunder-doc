.. _api_SpriteRender:

SpriteRender
============

Inherited: None

.. _api_SpriteRender_description:

Description
-----------

The SpriteRender component allows you to display images as sprites to use in both 2D and 3D scenes.



.. _api_SpriteRender_public:

Public Methods
--------------

+--------------------------------+--------------------------------------------------------------------+
|    :ref:`Vector4<api_Vector4>` | :ref:`color<api_SpriteRender_fba8c1d6>` () const                   |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`drawMode<api_SpriteRender_814a05cb>` () const                |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`layer<api_SpriteRender_67180f49>` () const                   |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setColor<api_SpriteRender_904b5d8f>` (const Vector4 & color) |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setDrawMode<api_SpriteRender_0cdb4f27>` (int  mode)          |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setLayer<api_SpriteRender_feabc217>` (int  layer)            |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setSize<api_SpriteRender_edbc2864>` (const Vector2 & size)   |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setSprite<api_SpriteRender_3ed10b45>` (Sprite * sprite)      |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTexture<api_SpriteRender_5410d6ce>` (Texture * texture)   |
+--------------------------------+--------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`size<api_SpriteRender_67d32f54>` () const                    |
+--------------------------------+--------------------------------------------------------------------+
|    :ref:`Sprite<api_Sprite>` * | :ref:`sprite<api_SpriteRender_f372d409>` () const                  |
+--------------------------------+--------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`texture<api_SpriteRender_273d405b>` () const                 |
+--------------------------------+--------------------------------------------------------------------+

.. _api_SpriteRender_enums:

Public Enums
------------

.. _api_SpriteRender_DrawMode:

**enum SpriteRender::DrawMode**

+----------------------+-------+------------------------------------------------------------------------------+
|             Constant | Value | Description                                                                  |
+----------------------+-------+------------------------------------------------------------------------------+
| SpriteRender::Simple | 0     | The SpriteRender will draw sprite as is.                                     |
+----------------------+-------+------------------------------------------------------------------------------+
| SpriteRender::Sliced | 1     | The SpriteRender will respect 9 patch slicing rules for the size property.   |
+----------------------+-------+------------------------------------------------------------------------------+
|  SpriteRender::Tiled | 2     | The SpriteRender will duplicate sprites to fill the size property rectangle. |
+----------------------+-------+------------------------------------------------------------------------------+



.. _api_SpriteRender_static:

Static Methods
--------------

None

.. _api_SpriteRender_methods:

Methods Description
-------------------

.. _api_SpriteRender_fba8c1d6:

 :ref:`Vector4<api_Vector4>`  **SpriteRender::color** () const

Returns the color of the sprite to be drawn.

**See also** setColor().

----

.. _api_SpriteRender_814a05cb:

 int **SpriteRender::drawMode** () const

Returns a draw mode for the sprite. Please check SpriteRender::DrawMode for more details.

**See also** setDrawMode().

----

.. _api_SpriteRender_67180f49:

 int **SpriteRender::layer** () const

Returns the redering layer for the sprite.

**See also** setLayer().

----

.. _api_SpriteRender_904b5d8f:

 void **SpriteRender::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the sprite to be drawn.

**See also** *color*().

----

.. _api_SpriteRender_0cdb4f27:

 void **SpriteRender::setDrawMode** (int  *mode*)

Sets a draw *mode* for the sprite. Please check SpriteRender::DrawMode for more details.

**See also** drawMode().

----

.. _api_SpriteRender_feabc217:

 void **SpriteRender::setLayer** (int  *layer*)

Sets the redering *layer* for the sprite.

**See also** *layer*().

----

.. _api_SpriteRender_edbc2864:

 void **SpriteRender::setSize** (:ref:`Vector2<api_Vector2>` & *size*)

Sets a new *size* of sprite.

**See also** *size*().

----

.. _api_SpriteRender_3ed10b45:

 void **SpriteRender::setSprite** (:ref:`Sprite<api_Sprite>` * *sprite*)

Replaces current *sprite* with a new one.

**See also** *sprite*().

----

.. _api_SpriteRender_5410d6ce:

 void **SpriteRender::setTexture** (:ref:`Texture<api_Texture>` * *texture*)

Replaces current *texture* with a new one.

**See also** *texture*().

----

.. _api_SpriteRender_67d32f54:

 :ref:`Vector2<api_Vector2>`  **SpriteRender::size** () const

Returns size of sprite.

**See also** setSize().

----

.. _api_SpriteRender_f372d409:

 :ref:`Sprite<api_Sprite>` * **SpriteRender::sprite** () const

Returns a sprite sheet.

**See also** setSprite().

----

.. _api_SpriteRender_273d405b:

 :ref:`Texture<api_Texture>` * **SpriteRender::texture** () const

Returns current assigned texture.

**See also** setTexture().


