.. _api_Texture:

Texture
=======

Inherited: None

.. _api_Texture_description:

Description
-----------

This class can be used to handle texture resource or create them at runtime.



.. _api_Texture_public:

Public Methods
--------------

+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`addSurface<api_Texture_ed913fc6>` (const Texture::Surface & surface)        |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`depth<api_Texture_13bf49d8>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`depthBits<api_Texture_675a209d>` () const                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`filtering<api_Texture_704e6dcb>` () const                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`flags<api_Texture_f65b8291>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`format<api_Texture_5ab0671f>` () const                                      |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`getPixel<api_Texture_26109aed>` (int  x, int  y, int  level) const          |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                 :ref:`ByteArray<api_ByteArray>` | :ref:`getPixels<api_Texture_9b1d58f6>` (int  level) const                         |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`height<api_Texture_5bc89306>` () const                                      |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isArray<api_Texture_7a29fecb>` () const                                     |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isCubemap<api_Texture_5492b38f>` () const                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isFeedback<api_Texture_8b7340ce>` () const                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isRender<api_Texture_d6af019e>` () const                                    |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`mipCount<api_Texture_ab60d154>` () const                                    |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`readPixels<api_Texture_269b8510>` (int  x, int  y, int  width, int  height) |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`resize<api_Texture_465d910c>` (int  width, int  height)                     |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setCompress<api_Texture_c476fd51>` (int  method)                            |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setDepth<api_Texture_2bae1893>` (int  depth)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setDepthBits<api_Texture_0cd492b1>` (int  depth)                            |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setDirty<api_Texture_486e17a9>` ()                                          |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setFiltering<api_Texture_127a4b05>` (int  type)                             |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setFlags<api_Texture_12ea9d56>` (int  flags)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setFormat<api_Texture_63d5981c>` (int  type)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setHeight<api_Texture_dec1b379>` (int  height)                              |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setWidth<api_Texture_028f679d>` (int  width)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setWrap<api_Texture_02756f4e>` (int  type)                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`sides<api_Texture_76a9428c>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`Texture::Surface<api_Texture_Surface>` & | :ref:`surface<api_Texture_e84267cb>` (int  side)                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`width<api_Texture_05d38a7e>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`wrap<api_Texture_e57036b4>` () const                                        |
+-------------------------------------------------+-----------------------------------------------------------------------------------+

.. _api_Texture_enums:

Public Enums
------------

.. _api_Texture_FilteringType:

**enum Texture::FilteringType**

+--------------------+-------+---------------------------------------------------------------------------------+
|           Constant | Value | Description                                                                     |
+--------------------+-------+---------------------------------------------------------------------------------+
|      Texture::None | 0     | Texture samples draw as is.                                                     |
+--------------------+-------+---------------------------------------------------------------------------------+
|  Texture::Bilinear | 1     | Texture samples are averaged.                                                   |
+--------------------+-------+---------------------------------------------------------------------------------+
| Texture::Trilinear | 2     | Texture samples are averaged and also interpolated from adjacent mipmap levels. |
+--------------------+-------+---------------------------------------------------------------------------------+

.. _api_Texture_Flags:

**enum Texture::Flags**

+-------------------+--------+---------------------------------------------------------+
|          Constant | Value  | Description                                             |
+-------------------+--------+---------------------------------------------------------+
|   Texture::Render | (1<<0) | This texture is used as render target in frame buffers. |
+-------------------+--------+---------------------------------------------------------+
| Texture::Feedback | (1<<1) | The feedback textures can read data from GPU to CPU.    |
+-------------------+--------+---------------------------------------------------------+

.. _api_Texture_FormatType:

**enum Texture::FormatType**

+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|                Constant | Value | Description                                                                                                                              |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|             Texture::R8 | 0     | Single channel(Red) texture. 8-bit integer                                                                                               |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|           Texture::RGB8 | 1     | Color texture format. 8 bit integer per channel. 24-bits in total.                                                                       |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|          Texture::RGBA8 | 2     | Color texture format with alpha channel. 8-bit integer per channel. 32-bits in total.                                                    |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|        Texture::RGB10A2 | 3     | 10 bits each for RGB, 2 for Alpha.                                                                                                       |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
| Texture::R11G11B10Float | 4     | This uses special 11 and 10-bit floating-point values. This is very economical for floating-point values (using only 32-bits per value). |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|    Texture::RGBA32Float | 5     | Color texture and alpha with floating-point values. It uses 32-bit floating-point values per channel.                                    |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|    Texture::RGBA16Float | 6     | Color texture and alpha with floating-point values. It uses 16-bit floating-point values per channel.                                    |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|          Texture::Depth | 7     | Depth buffer texture format. Number bits per pixel depend on graphical settings and hardware. Can be 16, 24 or 32-bit per pixel.         |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_Texture_WrapType:

**enum Texture::WrapType**

Wrap mode for textures.

+-------------------+-------+--------------------------------------------------------------------------------------------+
|          Constant | Value | Description                                                                                |
+-------------------+-------+--------------------------------------------------------------------------------------------+
|    Texture::Clamp | 0     | Clamps the texture to the last pixel at the edge.                                          |
+-------------------+-------+--------------------------------------------------------------------------------------------+
|   Texture::Repeat | 1     | Tiles the texture, creating a repeating pattern.                                           |
+-------------------+-------+--------------------------------------------------------------------------------------------+
| Texture::Mirrored | 2     | Tiles the texture, creating a repeating pattern by mirroring it at every integer boundary. |
+-------------------+-------+--------------------------------------------------------------------------------------------+



.. _api_Texture_static:

Static Methods
--------------

+-----------+------------------------------------------------+
|  uint32_t | :ref:`maxCubemapSize<api_Texture_58b49617>` () |
+-----------+------------------------------------------------+
|  uint32_t | :ref:`maxTextureSize<api_Texture_9b4fde0a>` () |
+-----------+------------------------------------------------+

.. _api_Texture_methods:

Methods Description
-------------------

.. _api_Texture_ed913fc6:

 void **Texture::addSurface** (:ref:`Texture::Surface<api_Texture::Surface>` & *surface*)

Adds *surface* to the texture. Each texture must contain at least one *surface*.

----

.. _api_Texture_13bf49d8:

 int **Texture::depth** () const

Returns depth dimension for the texture.

**See also** setDepth().

----

.. _api_Texture_675a209d:

 int **Texture::depthBits** () const

Returns the number of depth buffer bits.


**Note:** This value is valid only for the depth textures.


**See also** setDepthBits().

----

.. _api_Texture_704e6dcb:

 int **Texture::filtering** () const

Returns filtering type of texture. For more details please see the Texture::FilteringType enum.

**See also** setFiltering().

----

.. _api_Texture_f65b8291:

 int **Texture::flags** () const

Returns service flags for the texture.

**See also** setFlags() and Texture::Flags.

----

.. _api_Texture_5ab0671f:

 int **Texture::format** () const

Returns format type of texture. For more details please see the Texture::FormatType enum.

**See also** setFormat().

----

.. _api_Texture_26109aed:

 int **Texture::getPixel** (int  *x*, int  *y*, int  *level*) const

Returns pixel color from mip *level* at *x* and *y* position as RGBA integer for example 0x00ff00ff which can be mapped to (0, 255, 0, 255)

----

.. _api_Texture_9b1d58f6:

 :ref:`ByteArray<api_ByteArray>`  **Texture::getPixels** (int  *level*) const

Returns texture data from a mip *level*.

----

.. _api_Texture_5bc89306:

 int **Texture::height** () const

Returns height for the texture.

**See also** setHeight().

----

.. _api_Texture_7a29fecb:

 bool **Texture::isArray** () const

Returns true if texture provides a set of textures; otherwise returns false.


**Note:** For now will always return false.


----

.. _api_Texture_5492b38f:

 bool **Texture::isCubemap** () const

Returns true if the texture is a cube map; otherwise returns false.

----

.. _api_Texture_8b7340ce:

 bool **Texture::isFeedback** () const

Returns true if texture marked as a feed back texture; otherwise returns false. The feedback textures can read data from GPU to CPU.

----

.. _api_Texture_d6af019e:

 bool **Texture::isRender** () const

Returns true if texture is can be attached to framebuffer; otherwise returns false.

----

.. _api_Texture_58b49617:

 uint32_t **Texture::maxCubemapSize** ()

Returns the maximum cubemap size.

----

.. _api_Texture_9b4fde0a:

 uint32_t **Texture::maxTextureSize** ()

Returns the maximum texure size.

----

.. _api_Texture_ab60d154:

 int **Texture::mipCount** () const

Returns the number of MIP levels.

----

.. _api_Texture_269b8510:

 void **Texture::readPixels** (int  *x*, int  *y*, int  *width*, int  *height*)

Read pixels from GPU at *x* and *y* position with *width* and *height* dimensions into texture data.

----

.. _api_Texture_465d910c:

 void **Texture::resize** (int  *width*, int  *height*)

Sets new *width* and *height* for the texture.

----

.. _api_Texture_c476fd51:

 void **Texture::setCompress** (int  *method*)

Set the compression *method*.

----

.. _api_Texture_2bae1893:

 void **Texture::setDepth** (int  *depth*)

Sets new *depth* dimension for the texture.

**See also** *depth*().

----

.. _api_Texture_0cd492b1:

 void **Texture::setDepthBits** (int  *depth*)

Sets the number of *depth* buffer bits.


**Note:** This value is valid only for the *depth* textures.


**See also** *depth*Bits().

----

.. _api_Texture_486e17a9:

 void **Texture::setDirty** ()

Marks texture as dirty. That means this texture must be forcefully reloaded.

----

.. _api_Texture_127a4b05:

 void **Texture::setFiltering** (int  *type*)

Sets filtering *type* of texture. For more details please see the Texture::FilteringType enum.

**See also** filtering().

----

.. _api_Texture_12ea9d56:

 void **Texture::setFlags** (int  *flags*)

Sets service *flags* for the texture.

**See also** *flags*() and Texture::Flags.

----

.. _api_Texture_63d5981c:

 void **Texture::setFormat** (int  *type*)

Sets format *type* of texture. For more details please see the Texture::FormatType enum.

**See also** format().

----

.. _api_Texture_dec1b379:

 void **Texture::setHeight** (int  *height*)

Sets new *height* for the texture.

**See also** *height*().

----

.. _api_Texture_028f679d:

 void **Texture::setWidth** (int  *width*)

Sets new *width* for the texture.

**See also** *width*().

----

.. _api_Texture_02756f4e:

 void **Texture::setWrap** (int  *type*)

Sets the *type* of warp policy. For more details please see the Texture::WrapType enum.

**See also** wrap().

----

.. _api_Texture_76a9428c:

 int **Texture::sides** () const

Returns the number of texture sides. In most cases returns 1 but for the cube map will return 6

----

.. _api_Texture_e84267cb:

 :ref:`Texture::Surface<api_Texture::Surface>` & **Texture::surface** (int  *side*)

Returns a surface for the provided *side*. Each texture must contain at least one surface. Commonly used to set surfaces for the cube maps.

----

.. _api_Texture_05d38a7e:

 int **Texture::width** () const

Returns width for the texture.

**See also** setWidth().

----

.. _api_Texture_e57036b4:

 int **Texture::wrap** () const

Returns the type of warp policy. For more details please see the Texture::WrapType enum.

**See also** setWrap().


