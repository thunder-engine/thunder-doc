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
|    :ref:`Vector4<api_Vector4>` | :ref:`color<api_SpriteRender_b8036425>` () const                   |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`drawMode<api_SpriteRender_6a7cb50e>` () const                |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`layer<api_SpriteRender_f42aec76>` () const                   |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setColor<api_SpriteRender_a8493762>` (const Vector4 & color) |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setDrawMode<api_SpriteRender_fb58479c>` (int  mode)          |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setLayer<api_SpriteRender_58e2f71a>` (int  layer)            |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setSize<api_SpriteRender_5b8e90c3>` (const Vector2 & size)   |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setSprite<api_SpriteRender_ae4d7560>` (Sprite * sprite)      |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTexture<api_SpriteRender_a312586e>` (Texture * texture)   |
+--------------------------------+--------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`size<api_SpriteRender_25943d1a>` () const                    |
+--------------------------------+--------------------------------------------------------------------+
|    :ref:`Sprite<api_Sprite>` * | :ref:`sprite<api_SpriteRender_c514e0b7>` () const                  |
+--------------------------------+--------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`texture<api_SpriteRender_487295e1>` () const                 |
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

.. _api_SpriteRender_b8036425:

 :ref:`Vector4<api_Vector4>`  **SpriteRender::color** () const

Returns the color of the sprite to be drawn.

**See also** setColor().

----

.. _api_SpriteRender_6a7cb50e:

 int **SpriteRender::drawMode** () const

Returns a draw mode for the sprite. Please check SpriteRender::DrawMode for more details.

**See also** setDrawMode().

----

.. _api_SpriteRender_f42aec76:

 int **SpriteRender::layer** () const

Returns the redering layer for the sprite.

**See also** setLayer().

----

.. _api_SpriteRender_a8493762:

 void **SpriteRender::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the sprite to be drawn.

**See also** color().

----

.. _api_SpriteRender_fb58479c:

 void **SpriteRender::setDrawMode** (int  *mode*)

Sets a draw *mode* for the sprite. Please check SpriteRender::DrawMode for more details.

**See also** drawMode().

----

.. _api_SpriteRender_58e2f71a:

 void **SpriteRender::setLayer** (int  *layer*)

Sets the redering *layer* for the sprite.

**See also** layer().

----

.. _api_SpriteRender_5b8e90c3:

 void **SpriteRender::setSize** (:ref:`Vector2<api_Vector2>` & *size*)

Sets a new *size* of sprite.

**See also** size().

----

.. _api_SpriteRender_ae4d7560:

 void **SpriteRender::setSprite** (:ref:`Sprite<api_Sprite>` * *sprite*)

Replaces current *sprite* with a new one.

**See also** sprite().

----

.. _api_SpriteRender_a312586e:

 void **SpriteRender::setTexture** (:ref:`Texture<api_Texture>` * *texture*)

Replaces current *texture* with a new one.

**See also** texture().

----

.. _api_SpriteRender_25943d1a:

 :ref:`Vector2<api_Vector2>`  **SpriteRender::size** () const

Returns size of sprite.

**See also** setSize().

----

.. _api_SpriteRender_c514e0b7:

 :ref:`Sprite<api_Sprite>` * **SpriteRender::sprite** () const

Returns a sprite sheet.

**See also** setSprite().

----

.. _api_SpriteRender_487295e1:

 :ref:`Texture<api_Texture>` * **SpriteRender::texture** () const

Returns current assigned texture.

**See also** setTexture().


