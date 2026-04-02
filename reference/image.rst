.. _api_Image:

Image
=====

Inherited: None

.. _api_Image_description:

Description
-----------

The Image class represents an image or sprite that can be rendered and displayed on the screen within a graphical user interface (GUI). It is used to incorporate visual elements into the interface, such as icons, backgrounds, or illustrations, by loading and rendering image files.



.. _api_Image_public:

Public Methods
--------------

+----------------------------------+--------------------------------------------------------------+
|      :ref:`Vector4<api_Vector4>` | :ref:`color<api_Image_2405bf8e>` () const                    |
+----------------------------------+--------------------------------------------------------------+
|                              int | :ref:`drawMode<api_Image_bad9c752>` () const                 |
+----------------------------------+--------------------------------------------------------------+
|  :ref:`Material<api_Material>` * | :ref:`material<api_Image_0ea73cb8>` () const                 |
+----------------------------------+--------------------------------------------------------------+
|                             void | :ref:`setColor<api_Image_9cf8e51d>` (const Vector4 & color)  |
+----------------------------------+--------------------------------------------------------------+
|                             void | :ref:`setDrawMode<api_Image_f5a47628>` (int  mode)           |
+----------------------------------+--------------------------------------------------------------+
|                             void | :ref:`setMaterial<api_Image_5f40e2a1>` (Material * material) |
+----------------------------------+--------------------------------------------------------------+
|                             void | :ref:`setSprite<api_Image_706924ae>` (Sprite * sprite)       |
+----------------------------------+--------------------------------------------------------------+
|                             void | :ref:`setTexture<api_Image_8f56902d>` (Texture * image)      |
+----------------------------------+--------------------------------------------------------------+
|      :ref:`Sprite<api_Sprite>` * | :ref:`sprite<api_Image_04c219d6>` () const                   |
+----------------------------------+--------------------------------------------------------------+



.. _api_Image_static:

Static Methods
--------------

None

.. _api_Image_methods:

Methods Description
-------------------

.. _api_Image_2405bf8e:

 :ref:`Vector4<api_Vector4>`  **Image::color** () const

Returns the color of the image to be drawn.

**See also** setColor().

----

.. _api_Image_bad9c752:

 int **Image::drawMode** () const

Returns a draw mode for the image. Please check Image::DrawMode for more details.

**See also** setDrawMode().

----

.. _api_Image_0ea73cb8:

 :ref:`Material<api_Material>` * **Image::material** () const

Returns an instantiated Material assigned to Image.

**See also** setMaterial().

----

.. _api_Image_9cf8e51d:

 void **Image::setColor** (:ref:`Vector4<api_Vector4>` & *color*)

Changes the *color* of the image to be drawn.

**See also** color().

----

.. _api_Image_f5a47628:

 void **Image::setDrawMode** (int  *mode*)

Sets a draw *mode* for the image. Please check Image::DrawMode for more details.

**See also** drawMode().

----

.. _api_Image_5f40e2a1:

 void **Image::setMaterial** (:ref:`Material<api_Material>` * *material*)

Creates a new instance of *material* and assigns it.

**See also** material().

----

.. _api_Image_706924ae:

 void **Image::setSprite** (:ref:`Sprite<api_Sprite>` * *sprite*)

Replaces the current *sprite* with a new one.

**See also** sprite().

----

.. _api_Image_8f56902d:

 void **Image::setTexture** (:ref:`Texture<api_Texture>` * *image*)

Replaces the current *image* with a new one.

----

.. _api_Image_04c219d6:

 :ref:`Sprite<api_Sprite>` * **Image::sprite** () const

Returns the sprite assigned to the Image.

**See also** setSprite().


