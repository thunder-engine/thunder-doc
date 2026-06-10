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
|    :ref:`Vector4<api_Vector4>` | :ref:`color<api_SpriteRender_782fab40>` () const                   |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`drawMode<api_SpriteRender_3026b719>` () const                |
+--------------------------------+--------------------------------------------------------------------+
|                            int | :ref:`layer<api_SpriteRender_1b692580>` () const                   |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setColor<api_SpriteRender_9d1a0bf3>` (const Vector4 & color) |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setDrawMode<api_SpriteRender_27b8c416>` (int  mode)          |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setLayer<api_SpriteRender_7b3fc61d>` (int  layer)            |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setSize<api_SpriteRender_c23b4d75>` (const Vector2 & size)   |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setSprite<api_SpriteRender_b35e1c68>` (Sprite * sprite)      |
+--------------------------------+--------------------------------------------------------------------+
|                           void | :ref:`setTexture<api_SpriteRender_fdb5c7e2>` (Texture * texture)   |
+--------------------------------+--------------------------------------------------------------------+
|    :ref:`Vector2<api_Vector2>` | :ref:`size<api_SpriteRender_f187db59>` () const                    |
+--------------------------------+--------------------------------------------------------------------+
|    :ref:`Sprite<api_Sprite>` * | :ref:`sprite<api_SpriteRender_d48502ab>` () const                  |
+--------------------------------+--------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`texture<api_SpriteRender_31ab5c28>` () const                 |
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

.. _api_SpriteRender_782fab40:

 :ref:`Vector4<api_Vector4>`  **SpriteRender::color** () const

Returns the color of the sprite to be drawn.

**See also** setColor().

----

.. _api_SpriteRender_3026b719:

 int **SpriteRender::drawMode** () const

Returns a draw mode for the sprite. Please check SpriteRender::DrawMode for more details.

**See also** setDrawMode().

----

.. _api_SpriteRender_1b692580:

 int **SpriteRender::layer** () const

Returns the redering layer for the sprite.

**See also** setLayer().

----

.. _api_SpriteRender_9d1a0bf3:

 void **SpriteRender::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the sprite to be drawn.

**See also** color().

----

.. _api_SpriteRender_27b8c416:

 void **SpriteRender::setDrawMode** (int  *mode*)

Sets a draw *mode* for the sprite. Please check SpriteRender::DrawMode for more details.

**See also** drawMode().

----

.. _api_SpriteRender_7b3fc61d:

 void **SpriteRender::setLayer** (int  *layer*)

Sets the redering *layer* for the sprite.

**See also** layer().

----

.. _api_SpriteRender_c23b4d75:

 void **SpriteRender::setSize** (:ref:`Vector2<api_Vector2>` & *size*)

Sets a new *size* of sprite.

**See also** size().

----

.. _api_SpriteRender_b35e1c68:

 void **SpriteRender::setSprite** (:ref:`Sprite<api_Sprite>` * *sprite*)

Replaces current *sprite* with a new one.

**See also** sprite().

----

.. _api_SpriteRender_fdb5c7e2:

 void **SpriteRender::setTexture** (:ref:`Texture<api_Texture>` * *texture*)

Replaces current *texture* with a new one.

**See also** texture().

----

.. _api_SpriteRender_f187db59:

 :ref:`Vector2<api_Vector2>`  **SpriteRender::size** () const

Returns size of sprite.

**See also** setSize().

----

.. _api_SpriteRender_d48502ab:

 :ref:`Sprite<api_Sprite>` * **SpriteRender::sprite** () const

Returns a sprite sheet.

**See also** setSprite().

----

.. _api_SpriteRender_31ab5c28:

 :ref:`Texture<api_Texture>` * **SpriteRender::texture** () const

Returns current assigned texture.

**See also** setTexture().


